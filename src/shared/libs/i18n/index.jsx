import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';

const useTranslate = () => {
  const { t } = useTranslation();

  return useCallback(
    (key, params = null) => {
      const translation = t(key);

      if (params === null) {
        return translation;
      }

      const parametrizedTranslation = Object.keys(params).reduce(
        (acc, item) => {
          if (params[item]) {
            return acc.replaceAll(`\${${item}}`, params[item]);
          }

          return acc;
        },
        translation
      );

      return parametrizedTranslation;
    },
    [t]
  );
};

export { useTranslate };
