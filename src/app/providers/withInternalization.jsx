import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Cookie from '../../shared/libs/cookies';
import { COOKIE_LANG } from '../../shared/models/language/config';

const withInternalization = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { locale } = useRouter();
    const langCookie = Cookie.get(COOKIE_LANG);

    if (!langCookie || locale !== langCookie) {
      Cookie.set(COOKIE_LANG, String(locale));
    }

    return <WrappedComponent {...props} />;
  };

  return React.memo(appWithTranslation(Wrapper));
};

export default withInternalization;
