'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  nunjucks : {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  mysql : {
    enable: false,
    package: 'egg-mysql'
  }
  
};
