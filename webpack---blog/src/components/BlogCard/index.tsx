import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { emitViewArticleEvent } from './ga_events';
import { BlogCard, Url, Text5 } from './styles';
import { ItemDatoBlogInfo as BlogArticle } from '../../services/interfaces';

type CardProps = Pick<BlogArticle, 'headerImage' | 'title'> & {
  linkText: string;
  category: string;
  url: string;
};

const Card = (props: CardProps): JSX.Element => {
  const { headerImage, title, url, linkText, category } = props;

  return (
    <BlogCard
      className="blog-card"
      href={url}
      onClick={(): void => {
        emitViewArticleEvent(title, category);
      }}
    >
      <article>
        {headerImage && (
          <GatsbyImage
            alt={headerImage.alt}
            image={headerImage.gatsbyImageData}
            title={headerImage.title}
          />
        )}
      </article>
      <div>
        <Text5 as="p">{title}</Text5>
        <Url>{linkText}</Url>
      </div>
    </BlogCard>
  );
};

export default Card;
