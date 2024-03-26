import { useState } from 'react';

import cookies from '../../libs/cookies';

const COOKIE_USAGE_ACCEPTED = 'cookie_usage_accepted';
const COOKIE_USAGE_ACCEPTED_TRUE = '1';
const COOKIE_USAGE_ACCEPTED_FALSE = '0';

const useUsageAcceptedCookie = () => {
  const [cookieUsageAccepted, setCookieAccepted] = useState(
    cookies.get(COOKIE_USAGE_ACCEPTED) === COOKIE_USAGE_ACCEPTED_TRUE,
  );

  const setCookieUsageAccepted = (value) => {
    setCookieAccepted(value);

    cookies.set(
      COOKIE_USAGE_ACCEPTED,
      value ? COOKIE_USAGE_ACCEPTED_TRUE : COOKIE_USAGE_ACCEPTED_FALSE,
      { path: '/', expires: 365 },
    );
  };

  return [cookieUsageAccepted, setCookieUsageAccepted];
};

export default useUsageAcceptedCookie;
