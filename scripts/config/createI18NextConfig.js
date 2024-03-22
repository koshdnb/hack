const axios = require('axios');
const fs = require('fs');
const path = require('path');

const DEFAULT_LOCALE = 'default';
const LOCALE_PATH = './translations';
const CONFIG_NAME = 'next-i18next.config.js';

const createI18NextConfig = async (langs) => {
  const langNames = langs.map((lang) => lang.name);

  const nextI18NextConfig = {
    i18n: {
      defaultLocale: DEFAULT_LOCALE,
      locales: [DEFAULT_LOCALE, ...langNames],
      localePath: LOCALE_PATH,
    },
  };

  await fs.writeFileSync(
    `${CONFIG_NAME}`,
    `module.exports = ${JSON.stringify(nextI18NextConfig, null, 2)};`,
  );
};

const createConfigFile = async () => {
  const langsResponse = await axios.get(
    'https://iqoption.com/api/lang/routes',
  );
  const langs = langsResponse.data.result;
  await createI18NextConfig(langs);
};

(async () => {
  await createConfigFile();
})();
