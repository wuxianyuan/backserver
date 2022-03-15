'use strict';
const fs = require('fs')
const Controller = require('egg').Controller;
const {
  PrefixUrl
} = require('../config/index')
class JenkinsController extends Controller {

  /**
   * Jenkins API：获取项目信息
   */
  async getJson() {
    const {
      ctx
    } = this;
    const record = await ctx.curl(`${PrefixUrl}job/pipeline/api/json`, {
      dataType: 'json'
    })
    ctx.body = {
      code: record.status,
      data: record.data
    }
  }
  /**
   * Jenkins API：执行build命令
   */
  async build() {
    const {
      ctx
    } = this;
    const {
      proname
    } = ctx.query
    const record = await ctx.curl(`${PrefixUrl}job/pipeline/buildWithParameters?proname=${proname}`, {
      dataType: 'json',
      method: 'POST',
      contentType: 'json',
    })
    ctx.body = {
      code: record.status,
      data: record.data
    }
  }
  /**
   * Jenkins API：中止build命令
   */
  async stop() {
    const {
      ctx
    } = this;
    const number = await this.lastBuildNumber()
    const record = await ctx.curl(`${PrefixUrl}job/pipeline/${number}/stop`, {
      dataType: 'json',
      method: 'POST',
      contentType: 'json'
    })

    ctx.body = {
      code: record.status,
      data: record.data,
      number
    }

  }
  /**
   * Jenkins API：获取当前JOBbuild的状态等信息
   */
  async buildInfo() {
    const {
      ctx
    } = this;
    const number = await this.lastBuildNumber()
    const record = await ctx.curl(`${PrefixUrl}job/pipeline/${number}/api/json`, {
      dataType: 'json'
    })
    ctx.body = {
      code: record.status,
      data: record.data,
      number
    }
  }
  /**
   * Jenkins API：最后一次build号码
   */
  async lastBuildNumber() {
    const {
      ctx
    } = this;
    const record = await ctx.curl(`${PrefixUrl}job/pipeline/lastBuild/buildNumber`, {
      dataType: 'json'
    })
    ctx.body = {
      code: record.status,
      data: record.data
    }
    return record.data
  }

  /**
   * 预留接口，用于接收Jenkins工作空间里的项目配置文件
   * todo:接收传来的json格式的配置，并覆盖本地配置（仅执行一次）
   */
  async postconfig() {
    const {
      ctx
    } = this;
    ctx.body = {
      data: ctx
    }
  }

  /**
   * 预留接口，将配置信息传递给外部
   * todo:获取本地配置文件json，暴露到外部
   */
  async getconfig() {
    const {
      ctx
    } = this;
    ctx.body = {
      data: ctx
    }

  }

  /**
   * 预留接口，获取用户列表
   * todo:读取本地配置文件中的用户列表数据，暴露到外部
   */
  async getuserlist() {
    const {
      ctx
    } = this;
    ctx.body = {
      data: ctx
    }

  }
  /**
   * 预留接口，提供项目配置信息
   * todo:读取本地配置文件中的信息，暴露到外部
   * {
   * name:项目名
   * creater:创建人，
   * models:依赖包以及可选版本
   * routers:路由信息，以及开关
   * }
   */
  async getJobInfo() {
    const {
      ctx
    } = this;
    ctx.body = {
      data: ctx
    }

  }
  /**
   * 预留接口，用于修改项目配置信息
   * todo:获取传入的配置信息，修改本地配置文件
   * 可修改信息如下
   * {
   * name:项目名
   * models:依赖包以及可选版本
   * routers:路由信息，以及开关
   * }
   */
  async editJobInfo() {
    const {
      ctx
    } = this;
    ctx.body = {
      data: ctx
    }

  }
}

module.exports = JenkinsController;