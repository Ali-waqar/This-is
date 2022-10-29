import React from 'react';
import Helmet from 'react-helmet';

const GtagLoader = (): JSX.Element => (
  <Helmet>
    <script>{`window.addEventListener('load', function(event){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://sgtm.ironhack.com/sktbmdly.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P26TMM');});`}</script>
  </Helmet>
);

export default GtagLoader;
