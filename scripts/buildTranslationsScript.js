const path = require('path');
const fs = require('fs');
const buildTranslation = require('@iq/scripts/buildTranslations');

const createFolder = (folderPath) => {
  return new Promise((resolve, reject) => {
    fs.access(folderPath, (accessErr) => {
      if (accessErr === null) {
        resolve();

        return;
      }

      fs.mkdir(folderPath, (mkDirErr) => {
        if (mkDirErr === null) {
          resolve();

          return;
        }

        reject(mkDirErr);
      });
    });
  });
};

const createFile = (folderPath, fileName, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.join(folderPath, fileName),
      JSON.stringify(content),
      (err) => {
        if (err !== null) {
          return reject(err);
        }

        resolve();
      },
    );
  });
};

const createDefaultTranslation = async (distPath, folderName) => {
  const folderPath = path.join(distPath, folderName);

  await createFolder(folderPath);

  return createFile(folderPath, 'common.json', {});
};

const ROOT_PATH = path.join(__dirname, '../');

const config = {
  host: 'https://api.trade.exnova.com',
  groupName: 'web',
  keyPrefix: 'web',
  extensions: ['jsx', 'js', 'json'],
  srcPath: path.join(ROOT_PATH, 'src'),
  distPath: path.join(ROOT_PATH, 'translations'),
  filePath: './{locale}/common.json',
};

(async () => {
  await buildTranslation(config);
  await createDefaultTranslation(config.distPath, 'default');
})();

