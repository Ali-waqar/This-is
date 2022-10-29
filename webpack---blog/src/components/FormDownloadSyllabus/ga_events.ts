import { updateDataLayer } from '../../lib/datalayer';

function emitClickEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'form',
    eventAction: 'click button',
    eventLabel: 'syllabus request',
    formName: 'syllabus request',
  });
}

function emitSubmitOkEvent(newsletter: boolean): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'form',
    eventAction: 'syllabus request',
    eventLabel: 'form sent::ok',
    formName: 'syllabus request',
    formFields: `terms and conditions${newsletter ? '::newsletter' : ''}`,
  });
}

function emitSubmitKoEvent(errorFields: string[] = ['Server Error']): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'form',
    eventAction: 'syllabus request',
    eventLabel: 'form sent::ko',
    formName: 'syllabus request',
    formErrorFields: errorFields.join('::'),
  });
}

export { emitClickEvent, emitSubmitKoEvent, emitSubmitOkEvent };
