import { updateDataLayer } from '../../lib/datalayer';

function emitBreadcrumbEvent(level: string, text: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'footer',
    eventAction: `breadcrumb::click level ${level}`,
    eventLabel: level === 1 ? text.toLowerCase() : `home::${text.toLowerCase()}`
  });
}

export { emitBreadcrumbEvent };
