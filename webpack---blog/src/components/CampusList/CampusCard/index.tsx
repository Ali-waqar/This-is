import React from 'react';
import { withTranslation } from 'react-i18next';
import Img from 'gatsby-image';
import { Link } from '@chakra-ui/react';

import { Text2 } from '../../atoms/body';
import { StyledCampusCard, Text5, ImageCss } from './styles';
import { CampusCardProps } from './interface';
import * as gaEvents from './ga_events';

const CampusCard: React.SFC<any> = (props: CampusCardProps): JSX.Element => {
  const { campus, campusClass, showCourses, showLinks, t } = props;
  return (
    <StyledCampusCard
      className={campusClass}
      href={campus.url}
      key={campus.name}
      onClick={(): void => {
        gaEvents.emitCampusSelectEvent(campus);
      }}
    >
      <article>
        <span className="new">{t('campus-list:campusList.new')}</span>
        <ImageCss>
          <Img
            alt={`Ironhack ${campus.name}`}
            fluid={campus.image}
            style={{ height: '20rem' }}
          />
        </ImageCss>
      </article>
      <div>
        <Text2 as="h3">{`${campus.name}, ${campus.country}`}</Text2>
        {showCourses && (
          <Text5 as="p">
            {t('campus-list:campusList.courses')} {campus.courses.join(', ')}
          </Text5>
        )}
        <Text5 as="p">
          {t('campus-list:campusList.coursesIn')}{' '}
          <b>{campus.languages.join(', ')}</b>
        </Text5>
        {showLinks && (
          <Link
            borderBottom="1px"
            borderColor="electricBlue.10"
            color="electricBlue.100"
            fontSize="small"
            fontWeight="bold"
            pb={0.25}
            to={campus.url}
          >
            {t('campus-list:campusList.cta')}
          </Link>
        )}
      </div>
    </StyledCampusCard>
  );
};

export default withTranslation()(CampusCard);
