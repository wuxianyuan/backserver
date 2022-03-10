'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/jenkins/getJson',controller.jenkins.getJson)//获取项目信息
  router.get('/jenkins/build',controller.jenkins.build)//执行build指令
  router.get('/jenkins/stop',controller.jenkins.stop)//中止build指令
  router.get('/jenkins/buildInfo',controller.jenkins.buildInfo)//build信息
  router.get('/jenkins/lastBuildNumber',controller.jenkins.lastBuildNumber)//最近build号码
};
