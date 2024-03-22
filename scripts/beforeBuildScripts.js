const { exec } = require('child_process');

const BUILD_SCRIPTS = ['buildTranslationsScript'];
const CONFIG_SCRIPTS = ['createI18NextConfig'];
const CONFIG_SCRIPTS_PATH = '/config';

const args = process.argv;

const getConfigPath = (script) => `${CONFIG_SCRIPTS_PATH}/${script}`;

const getScripts = () => {
  const configScriptsWithPath = CONFIG_SCRIPTS.map(getConfigPath);

  if (args.includes('--only-config')) {
    return configScriptsWithPath;
  }

  return [...configScriptsWithPath, ...BUILD_SCRIPTS];
};

const scripts = getScripts();

scripts.forEach((scriptName) => {
  exec(`node ${__dirname}/${scriptName}.js`, (error) => {
    if (error) {
      console.error(`Error: ${error}`);
    }
  });
});
