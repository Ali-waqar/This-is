import { updateDataLayer } from '../../lib/datalayer';

function emitFindMoreEvent() {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'interest',
    eventAction: 'click button',
    eventLabel: 'snackbar::learn more'
  });
}
export { emitFindMoreEvent };
