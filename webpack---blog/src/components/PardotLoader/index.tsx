import React from 'react';
import Helmet from 'react-helmet';

const PardotLoader = (): JSX.Element => (
  <Helmet>
    <script type="text/javascript">
      {`
        piAId = '689303';
        piCId = '1659';
        piHostname = 'pi.pardot.com';
        (function() {
          function async_load(){
            var s = document.createElement('script'); s.type = 'text/javascript';
            s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
            var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
          }
          if(window.attachEvent) { window.attachEvent('onload', async_load); }
          else { window.addEventListener('load', async_load, false); }
        })();
      `}
    </script>
  </Helmet>
);

export default PardotLoader;
