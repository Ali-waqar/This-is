import { updateDataLayer } from '../../lib/datalayer';

function emitViewArticleEvent(title: string, category: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navigation',
    eventAction: 'click card',
    eventLabel: `blog articles::${title}::${category.toLowerCase()}`
  });
}

export { emitViewArticleEvent };
