import '/styles/globals.css';
import '/styles/reset.css';

import withInternalization from '../src/app/providers/withInternalization';
import App from '/src/app/App';

const MyApp = ({ Component, pageProps }) => {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
};

export default withInternalization(MyApp);
