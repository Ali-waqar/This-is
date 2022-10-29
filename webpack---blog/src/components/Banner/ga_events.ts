import { updateDataLayer } from '../../lib/datalayer';

const events = {
  covid: {
    eventLabel: 'covid_banner',
  },
  isa: {
    eventLabel: 'isa_banner',
  },
  apprenticeship: {
    eventLabel: 'Apprenticeship Topbanner',
  },
};

function emitBannerEvent(type: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click button',
    eventLabel: events[type].eventLabel,
  });
}

export { emitBannerEvent };
