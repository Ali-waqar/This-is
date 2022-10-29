import React from 'react';
import styled from 'styled-components';

import config from '../config';
import { getLinkByPageName } from '../../lib/links';
import ArrowRightAll from '../../../static/assets/icons/menu/arrow-right-all.svg';

const Badge = styled.span`
  text-transform: uppercase;
  color: ${config.palette.white};
  font-size: 0.9rem;
  line-height: 1rem;
  letter-spacing: 0.02rem;
  margin-left: 0.8rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.type == 'new' ? '#BBB7FF' : config.palette.lightBlue}};
`;

const UnorderedList = styled.ul`
  min-width: 32rem;
`;

interface menuItem {
  title: string;
  description?: string;
  urlCode: string;
  type?: string;
  badge?: string;
  handleClick?: () => void;
  highlight?: boolean;
  externalLink?: string;
}

interface Props {
  items: menuItem[];
  itemClass?: string;
  ulClass?: string;
  avoidUlWrapper?: boolean;
}

function MenuItems(props: Props): any {
  const { items, itemClass, ulClass, avoidUlWrapper } = props;

  function renderItems(): JSX.Element[] {
    return items.map((item, index) => {
      const {
        title,
        urlCode,
        description,
        externalLink,
        type,
        badge,
        handleClick,
        highlight,
      } = item;
      const isAlloption = type === 'all';

      return (
        <li
          className={`${isAlloption ? 'all-option' : itemClass} ${
            highlight ? 'highlight' : ''
          }`}
          key={index}
          onClick={handleClick}
        >
          <a href={externalLink || getLinkByPageName(urlCode)}>
            {title}
            {badge && <Badge type={badge}>{badge}</Badge>}
            {description && (
              <div>
                {description}
                {isAlloption && (
                  <ArrowRightAll style={{ display: 'inline-block' }} />
                )}
              </div>
            )}
          </a>
        </li>
      );
    });
  }

  return avoidUlWrapper ? (
    <>{renderItems()}</>
  ) : (
    <UnorderedList className={ulClass}>{renderItems()}</UnorderedList>
  );
}

export default MenuItems;
