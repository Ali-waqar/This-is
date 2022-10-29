import _ from 'lodash/fp';
import { useEffect, useState } from 'react';

import { usePageContext } from '../context/PageContext';

const GA_TRACKING_ID = 'UA-42568150-1';

// Active Optimize experiments. env -> pagename -> component
const ACTIVE_EXPERIMENTS = {
  staging: {
    apply: {
      form: {
        experimentId: 'GlEzOvgQSludxhqjDDfXaQ',
      },
    },
    home: {
      template: {
        experimentId: 'QSkTjWNWStqraI0s62NpoQ',
      },
    },
  },
  production: {
    apply: {
      form: {
        experimentId: 'GlEzOvgQSludxhqjDDfXaQ',
      },
    },
    home: {
      template: {
        experimentId: 'QSkTjWNWStqraI0s62NpoQ',
      },
    },
  },
};

function isGaReady(): boolean {
  return typeof window.ga === 'function';
}

async function waitForAnalytics(): Promise<void> {
  return new Promise<void>((resolve) => {
    if (isGaReady()) resolve();
    const intervalReference: number = setInterval(() => {
      if (isGaReady()) {
        clearInterval(intervalReference);
        resolve();
      }
    }, 1000);
  });
}

async function reportExperiments(
  experiments: Record<string, string>
): Promise<void> {
  const optimizeValue = _.pipe(
    _.toPairs,
    _.map(_.join('.')),
    _.join('!')
  )(experiments);
  await waitForAnalytics();
  window.ga(() => {
    const [tracker] = window.ga.getAll();
    tracker.set('exp', optimizeValue);
    tracker.send('pageview');
  });
}

async function getClientId(timeoutMilis?: number): Promise<string> {
  return new Promise((resolve) => {
    let timeoutId: number;
    if (timeoutMilis)
      timeoutId = window.setTimeout(() => resolve(''), timeoutMilis);

    const cleanResolve = (clientId: string): void => {
      if (timeoutId) clearTimeout(timeoutId);
      resolve(clientId);
    };

    waitForAnalytics()
      .then(() => {
        window.ga(() => {
          const trackers = window.ga.getAll();
          for (const tracker of trackers) {
            if (tracker.get('trackingId') === GA_TRACKING_ID) {
              const clientId = tracker.get('clientId');
              if (clientId) {
                return cleanResolve(clientId);
              }
            }
          }
          return cleanResolve('');
        });
      })
      .catch(() => cleanResolve(''));
  });
}

function useExperimentVariant(component: string, enabled = true): string {
  const env = process.env.GATSBY_ENV || 'staging';
  const { pageName, locale, gtmPageType } = usePageContext();

  const {
    experimentId,
    languages,
    defaultVariant = '0',
  } = ACTIVE_EXPERIMENTS[env][pageName]?.[component] ||
  ACTIVE_EXPERIMENTS[env][gtmPageType]?.[component] ||
  {};

  const testEnabled = enabled && (!languages || _.contains(locale, languages));

  const [variant, setVariant] = useState<string>(() =>
    testEnabled ? '' : defaultVariant
  );

  useEffect(() => {
    if (!testEnabled || !experimentId) return;
    const experiments = JSON.parse(localStorage.getItem('experiments') || '{}');
    let storedVariant = experiments[experimentId];

    if (!storedVariant) {
      storedVariant = _.toString(_.random(0, 1));

      experiments[experimentId] = storedVariant;

      localStorage.setItem('experiments', JSON.stringify(experiments));
    }

    reportExperiments(experiments).catch(_.noop);
    setVariant(storedVariant);
  }, [experimentId, languages, locale, defaultVariant, testEnabled]);

  return variant;
}

export { useExperimentVariant, getClientId };
