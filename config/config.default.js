/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631195530902_8227';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  userConfig.jwtSecret = 'wuxuwei';
  userConfig.mysql = {
    client: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'cms',
    },
    app: true,
    agent: false,
  };

  userConfig.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8000' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
