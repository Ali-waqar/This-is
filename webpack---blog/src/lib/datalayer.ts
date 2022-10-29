import _ from 'lodash';

import { windowDefined } from './utils';

const queue: object[] = [];
let dataLayerReady = false;

initializeDatalayer();

function updateDataLayer(event: object) {
  if (dataLayerReady) {
    window.dataLayer.push(event);
  } else {
    queue.push(event);
  }
}

async function initializeDatalayer() {
  await waitForDatalayer();
  dataLayerReady = true;

  let event;
  while ((event = queue.shift())) {
    window.dataLayer.push(event);
  }
}

async function waitForDatalayer() {
  if (isDatalayerReady()) return;

  return new Promise<void>((resolve) => {
    const intervalReference: number = setInterval(() => {
      if (isDatalayerReady()) {
        clearInterval(intervalReference);
        resolve();
      }
    }, 1000);
  });
}

function isDatalayerReady() {
  return (
    windowDefined() && typeof _.get(window, 'dataLayer.push') === 'function'
  );
}

export { updateDataLayer };
