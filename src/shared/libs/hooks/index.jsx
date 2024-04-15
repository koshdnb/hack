import { useEffect, useState } from 'react';

const useIOSVersion = () => {
  const [iosVersion, setIosVersion] = useState(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const iOS =
        /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const version = iOS
        ? parseFloat(
            ('' + (navigator.userAgent.match(/OS (\d+_\d+)/i) || [0, '0_0'])[1])
              .replace('_', '.')
              .replace('_', '')
          )
        : null;

      setIosVersion(version);
    }
  }, []);

  return iosVersion;
};

export default useIOSVersion;
