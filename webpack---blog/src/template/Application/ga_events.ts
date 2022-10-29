import _ from 'lodash/fp';
import moment from 'moment';

import { updateDataLayer } from '../../lib/datalayer';

function emitApplyEvent(campus: string, course: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'form',
    eventAction: 'click button',
    eventLabel: 'apply to ironhack::apply',
    formName: 'apply form',
    campus,
    courseName: course,
  });
}

function emitApplyKoEvent(
  campus: string,
  course: string,
  errors: string[] = ['Server Error']
): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'form',
    eventAction: 'apply form',
    eventLabel: 'form sent::ko',
    formName: 'apply form',
    campus,
    courseName: course,
    formErrorFields: errors.join('::'),
  });
}

function emitApplyOkEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'Form',
    eventAction: 'Submission',
    eventLabel: 'Application',
  });
}

function emitApplyStepOKEvent(step: number): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'Form',
    eventAction: 'Apply form',
    eventLabel: `Apply Step ${step}`,
  });
}

function emitApplyHomeStepOKEvent(step: number): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'form',
    eventAction: 'click cta',
    eventLabel: `homeapply::step${step}`,
  });
}

function emitApplyHomeInterestEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'interest',
    eventAction: 'click cta::apply',
    eventLabel: 'home app start',
  });
}

export {
  emitApplyEvent,
  emitApplyHomeInterestEvent,
  emitApplyKoEvent,
  emitApplyOkEvent,
  emitApplyStepOKEvent,
  emitApplyHomeStepOKEvent,
};
