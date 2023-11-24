const homeDir = require('path').join(require('os').homedir());
const app = require('./server.js');

const httpPort = 8080;
const httpsPort = 8443;

require('greenlock-express')
  .create({
    version: 'draft-11',
    server: 'https://acme-v02.api.letsencrypt.org/directory',
    email: 'ducclone00@gmail.com',
    agreeTos: true,
    approveDomains: ['ducph.info', 'www.ducph.info'],
    store: require('greenlock-store-fs'),
    configDir: homeDir,
    app: app,
  })
  .listen(httpPort, httpsPort);
