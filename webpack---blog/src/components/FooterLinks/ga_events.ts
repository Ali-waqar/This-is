import { updateDataLayer } from '../../lib/datalayer';

function emitFooterEvent(section: string, subSection: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'footer',
    eventAction: 'click level 2',
    eventLabel: `${section}::${subSection}`
  });
}

export { emitFooterEvent };
