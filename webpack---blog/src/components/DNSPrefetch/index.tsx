import React from 'react';
import Helmet from 'react-helmet';

import domains from './domains.json';

const DNSPrefectch = (): JSX.Element => (
  <Helmet>
    {domains.map((domain: string, index: number) => (
      // eslint-disable-next-line react/jsx-key
      <link href={domain} key={index} rel="dns-prefetch" />
    ))}
  </Helmet>
);

export default DNSPrefectch;
