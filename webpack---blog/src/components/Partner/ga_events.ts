import { updateDataLayer } from '../../lib/datalayer';

function emitHireInfoEvent() {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'interest',
    eventAction: 'click link',
    eventLabel: 'hire talent::more information'
  });
}

export { emitHireInfoEvent };
