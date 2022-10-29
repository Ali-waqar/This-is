import { useEffect, useState } from 'react';
import _ from 'lodash/fp';

import { getUserGeoDataQuery } from '../lib/graphql';
import { getFromStorage, writeInStorage } from '../storage/provider';

export type UserLocation = {
  timezone: string;
  country: string;
  countryName: string;
  remoteTimezone: string;
  defaultCampus: string;
  campusVisited: string;
};

type GraphQlGeoData = {
  currentTimezone: string;
  currentCountry: string;
  currentCountryName: string;
  remoteTimezone: string;
  defaultCampus: string;
};

const campusCodeMap: Record<string, string> = {
  Amsterdam: 'ams',
  Barcelona: 'bcn',
  Berlin: 'ber',
  Lisbon: 'lis',
  Madrid: 'mad',
  'Mexico City': 'mex',
  Miami: 'mia',
  Paris: 'par',
  Remote: 'rmt',
  'Sao Paulo': 'sao',
};

export default function useUserLocation(): {
  userLocation: UserLocation;
  isLoading: boolean;
} {
  const allOrNone = true;
  const storedLocation: UserLocation = getFromStorage(
    ['timezone', 'country', 'remoteTimezone', 'defaultCampus', 'countryName'],
    allOrNone
  );

  const { campusVisited }: { campusVisited: string } =
    getFromStorage(['campusVisited'], allOrNone) || {};

  const defaultUserLocation: UserLocation = storedLocation
    ? { ...storedLocation, campusVisited }
    : {};

  const [userLocation, setUserLocation] =
    useState<UserLocation>(defaultUserLocation);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocation = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.IRONHACK_API,
          getUserGeoDataQuery()
        );
        const body: { data: GraphQlGeoData } = await response.json();
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
        const locationData = {
          timezone: body.data.currentTimezone,
          country: body.data.currentCountry,
          countryName: regionNames.of(body.data.currentCountry),
          remoteTimezone: body.data.remoteTimezone,
          defaultCampus: campusCodeMap[body.data.defaultCampus],
          ...(campusVisited ? { campusVisited } : {}),
        };

        writeInStorage(locationData);
        setUserLocation(locationData);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };
    if (_.isEmpty(userLocation)) {
      fetchLocation();
    } else {
      setIsLoading(false);
    }
  }, [userLocation, campusVisited]);

  return { userLocation, isLoading };
}
