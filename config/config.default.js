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
  config.mysql = {
    // 单数据库信息配置
    client: {
      //host 
      host: 'localhost',
      //port 
      port: '3306',
      //username 
      user: 'root',
      //password 
      password: 'q123123',
      //database 
      database: 'MYSQL80'
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app: true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646106684469_2670';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    security : {
      csrf: {
        enable: false,
      }
    }
  };
  const pic = {
    serverUrl: 'https://www.qqlykm.cn/api/ACG/'
  }
  const news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  const view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  return {
    ...config,
    ...userConfig,
    news,
    view,
    pic
  }
}