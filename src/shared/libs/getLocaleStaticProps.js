import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getLocaleStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
