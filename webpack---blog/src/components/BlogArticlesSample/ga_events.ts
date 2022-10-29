import { updateDataLayer } from '../../lib/datalayer';

function emitViewBlogEvent() {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navigation',
    eventAction: 'click button',
    eventLabel: 'blog articles::view more'
  });
}

export { emitViewBlogEvent };
