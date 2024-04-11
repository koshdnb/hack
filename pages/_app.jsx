import { Sofia_Sans } from 'next/font/google';
import '/styles/globals.css';
import '/styles/reset.css';
import '/styles/modal.css';

import AcceptCookieNotification from '../src/shared/ui/AcceptCookieNotification';
import App from '/src/app/App';

const sofiaSans = Sofia_Sans({
  weight: ['300', '400', '600', '700', '800'],
  style: 'normal',
  subsets: ['latin-ext'],
});

const MyApp = ({ Component, pageProps }) => {
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
