import { updateDataLayer } from '../../../lib/datalayer';

function emitCampusSelectEvent(campus: object): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'interest',
    eventAction: 'click card',
    eventLabel:
      campus.code === 'RMT'
        ? 'study online::remote'
        : `study in person::${campus.code.toLowerCase()}`
  });
}

export { emitCampusSelectEvent };
