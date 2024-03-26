import { useEffect, useState } from 'react';

import useUsageAcceptedCookie from './useUsageAcceptedCookie';
import { Wrapper, Content, InfoText, Button } from './styled';

const AcceptCookieNotification = () => {
  const [isOpen, setOpen] = useState(false);
  const [cookieUsageAccepted, setCookieUsageAccepted] =
    useUsageAcceptedCookie();

  useEffect(() => {
    if (cookieUsageAccepted === isOpen) {
      setOpen(!cookieUsageAccepted);
    }
  }, [cookieUsageAccepted]);

  if (!isOpen) {
    return null;
  }

  const handleAgreeClick = () => {
    setCookieUsageAccepted(true);
  };

  const renderNotificationText = () => (
    <InfoText>
      We use cookies to personalize your experience on our site. By continuing
      to use this site, you agree to our Cookie Policy
    </InfoText>
  );

  return (
    <Wrapper>
      <Content>
        {renderNotificationText()}
        <button onClick={handleAgreeClick}>
          I agree
        </button>
      </Content>
    </Wrapper>
  );
};

export default AcceptCookieNotification;
