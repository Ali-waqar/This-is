import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash/fp';
import { useFormContext } from 'react-hook-form';

import { formatDate } from '../../../../../lib/cohorts';
import Cohort from '../../../../../components/interfaces/Cohorts';
import useUserLocation from '../../../../../hooks/useUserLocation';
import { isVirtualCampus } from '../../../../../lib/campus';

export const selectUniqueFormat = ({ cohorts, setValue }): void => {
  if (Object.keys(cohorts).length === 1) {
    setValue('format', Object.keys(cohorts)[0], {
      shouldValidate: true,
    });
  }
};

export const selectUniqueCohort = ({
  cohorts,
  selectedFormat,
  setValue,
}): void => {
  if (cohorts[selectedFormat]?.length === 1) {
    setValue('cohort', cohorts[selectedFormat][0][0], {
      shouldValidate: true,
    });
  }
};

const filterCohorts = ({
  allCohorts,
  remoteTimezone,
  selectedCampus,
  selectedCourse,
  selectedType,
}): Record<string, Cohort[]> =>
  _.filter(
    _.where({
      campus_code: _.eq(selectedCampus),
      course_code: _.startsWith(selectedCourse),
      ...(selectedCampus === 'rmt' && { timezone: _.eq(remoteTimezone) }),
      ...(selectedType === 'inCampus' &&
        !isVirtualCampus(selectedCampus) && {
          covid_format: _.eq('in_person'),
        }),
    })
  )(allCohorts);

const formatCohorts = ({ languages, cohortFormats }) =>
  _.reduce((acc, cohort) => {
    const title = `${formatDate(cohort.start_at)} - ${formatDate(
      cohort.end_at
    )}`;
    const description = `${languages[cohort.language]}${
      cohort.covid_format
        ? ` | ${cohortFormats[cohort.covid_format]?.name}`
        : ''
    }`;
    const format = cohort.course_code.slice(-2);

    if (!acc[format]) {
      acc[format] = [];
    }

    acc[format].push([cohort.id, { title, description }]);
    return acc;
  }, {});

export const useFilteredCohorts = (
  allCohorts: Cohort[]
): [Record<string, Cohort[]>, boolean] => {
  const { t } = useTranslation();
  const { userLocation } = useUserLocation();
  const { setValue, watch } = useFormContext();
  const [selectedType, selectedFormat, selectedCampus, selectedCourse] = watch([
    'type',
    'format',
    'campus',
    'course',
  ]) as string[];

  const languages = useMemo(
    () =>
      t('languages:languages', {
        returnObjects: true,
      }),
    [t]
  );
  const cohortFormats = useMemo(
    () =>
      t('covid:covid.cohortFormat', {
        returnObjects: true,
      }),
    [t]
  );

  const [cohorts, setCohorts] = useState<Record<string, Cohort[]>>({});
  const [noCohortsAvailable, setNoCohortsAvailable] = useState(false);

  useEffect(() => {
    setCohorts(
      _.pipe(
        () =>
          filterCohorts({
            allCohorts,
            remoteTimezone: userLocation.remoteTimezone,
            selectedCampus,
            selectedCourse,
            selectedType,
          }),
        formatCohorts({ languages, cohortFormats })
      )
    );
  }, [
    allCohorts,
    cohortFormats,
    languages,
    selectedCampus,
    selectedCourse,
    selectedType,
    setCohorts,
    userLocation.remoteTimezone,
  ]);

  useEffect(() => {
    if (selectedType && selectedFormat) {
      setNoCohortsAvailable(
        !selectedCampus ? false : _.isEmpty(Object.keys(cohorts))
      );
    }
  }, [cohorts, selectedCampus, selectedType, selectedFormat]);

  useEffect(() => {
    selectUniqueCohort({ cohorts, selectedFormat, setValue });
    selectUniqueFormat({ cohorts, setValue });
  }, [cohorts, selectedFormat, selectedCampus, selectedType, setValue]);

  return [cohorts, noCohortsAvailable];
};
