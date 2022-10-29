import React, { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash/fp';
import { Button, Link, SimpleGrid } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

import { emitViewBlogEvent } from './ga_events';
import { datoCategoryToWebUrl } from '../../../build-utils/dato-utils';
import { getLinkByPageName } from '../../lib/links';
import BlogCard from '../BlogCard';
import { Title1 } from '../atoms/headers';
import Layout from './styles';
import useBlogArticles from '../../hooks/useBlogArticles';
import useBlogCategories from '../../hooks/useBlogCategories';

interface Props {
  articleId?: string;
  category?: string;
}

const languageToRegion = {
  br: 'br/pt',
  de: 'de/de',
  en: 'us/en',
  es: 'es/es',
  fr: 'fr/fr',
  nl: 'nl/nl',
  pt: 'pt/pt',
};

const slugsToAvoid = [
  'managing-the-cybersecurity-risks-of-remote-work', //
  'how-to-begin-a-career-in-cybersecurity-without-previous-knowledge', //
  'what-is-employability',
  'comment-se-reorienter-vers-une-nouvelle-carriere-et-se-lancer-dans-la-tech',
  'why-you-deserve-a-job-you-love-not-just-one-that-pays-the-bills',
  'climbing-tech-career-ladder',
  'understanding-design-what-are-design-sprints',
  'when-is-the-best-time-to-learn-how-to-code',
  '5-most-infamous-hacks-all-time',
  'bad-job-interviews-survival-guide',
  'ux-strategy-guide-conceptualizing-and-designing-new-digital-products',
  'red-flags-to-look-for-in-tech-job-postings',
  'top-twenty-five-books-for-techies',
  'the-difference-between-java-and-javascript',
  '7-pioneer-programmers-you-hadn-t-heard-of',
  'making-part-time-education-work-for-you',
];

const BlogArticlesSample = (props, ref): JSX.Element => {
  const { articleId, category } = props;
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [articlesCount, setArticlesCount] = useState<number>(6);

  let articles = useBlogArticles(category);
  if (articleId) {
    articles = _.reject({ id: articleId }, articles);
  }

  const categories = useBlogCategories();

  const getUrl = (slugTitle: string, categoryCode: string): string => {
    const url = getLinkByPageName(datoCategoryToWebUrl(categoryCode), language);

    if (slugsToAvoid.includes(slugTitle)) {
      return `${url}/${slugTitle}`;
    }
    return `https://www.ironhack.com/${languageToRegion[language]}/blog/${slugTitle}`;
  };

  if (_.isEmpty(articles)) return null;

  return (
    <Layout ref={ref}>
      <Title1 as="h2">
        {typeof category === 'string'
          ? t('blog:blog.mainHeadline.blogPostSample.relatedPostsTitle', {
              category: categories[category].description,
            })
          : t('blog:blog.mainHeadline.blogPostSample.defaultTitle')}
      </Title1>
      <SimpleGrid columns={[1, null, null, 3]} my={4} spacing={4}>
        {articles.map((article, index) =>
          index < articlesCount ? (
            <BlogCard
              category={article.mainCategory.code}
              headerImage={article.headerImage}
              key={article.id}
              linkText={t('blog:blog.blogCard.linkText')}
              title={article.title}
              url={getUrl(article.slugTitle, article.mainCategory.code)}
            />
          ) : (
            <div key={article.id} style={{ display: 'none' }}>
              <BlogCard
                category={article.mainCategory.code}
                headerImage={article.headerImage}
                key={article.id}
                linkText={t('blog:blog.blogCard.linkText')}
                title={article.title}
                url={getUrl(article.slugTitle, article.mainCategory.code)}
              />
            </div>
          )
        )}
      </SimpleGrid>
      {articles.length > articlesCount ? (
        <Button
          colorScheme="bunker"
          onClick={(): void => {
            emitViewBlogEvent();
            setArticlesCount(_.add(6));
          }}
          variant="outline"
        >
          {t('blog:blog.readAll.linkText')}
        </Button>
      ) : (
        <Link
          _hover={{ textDecoration: 'none' }}
          as={GatsbyLink}
          to={getLinkByPageName('blog', language)}
          variant="unstyled"
        >
          <Button
            colorScheme="bunker"
            onClick={(): void => {
              emitViewBlogEvent();
            }}
            variant="outline"
          >
            {t('blog:blog.readAll.linkText')}
          </Button>
        </Link>
      )}
    </Layout>
  );
};

export default forwardRef<HTMLDivElement, Props>(BlogArticlesSample);
