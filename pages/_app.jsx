import { Sofia_Sans } from 'next/font/google';
import '/styles/globals.css';
import '/styles/reset.css';
import '/styles/modal.css';
import { init } from '../src/shared/libs/hooks/useGtmInit';

import AcceptCookieNotification from '../src/shared/ui/AcceptCookieNotification';
import App from '/src/app/App';
import { useEffect } from 'react';
import useMessageListener from '../src/shared/libs/hooks/useMessages';

const sofiaSans = Sofia_Sans({
  weight: ['300', '400', '600', '700', '800'],
  style: 'normal',
  subsets: ['latin-ext'],
});

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    init({
      window,
      document,
      id: 'GTM-KDC5JKFT',
    });
  }, []);
  const handleMessage = (event) => {
    if (event.data.type === 'form-submit') {
        window.dataLayer?.push({
            event: 'registration',
        });
    }
  };

  useMessageListener(handleMessage);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sofiaSans.style.fontFamily};
        }
      `}</style>
      <App>
        <Component {...pageProps} />
        {/*<AcceptCookieNotification />*/}
      </App>
    </>
  );
};

export default MyApp;
