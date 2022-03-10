'use strict';

const Controller = require('egg').Controller;

class JenkinsController extends Controller {
  usr='http://circle:119bbfbfb7ad5f52525c2b9ee4e4f1555b@'
  //获取项目信息
  async getJson() {
    const { ctx } = this;
    
    const record = await ctx.curl(`${this.usr}localhost:9000/job/pipeline/api/json`,{
      dataType: 'json'
    })
    ctx.body={
      code:record.status,
      data:record.data
    }
  }
  //执行build命令
  async build() {
    const { ctx } = this;
    const {proname} = ctx.query
    const record = await ctx.curl(`${this.usr}localhost:9000/job/pipeline/buildWithParameters?proname=${proname}`,{
      dataType: 'json',
      method: 'POST',
      contentType: 'json',
    })
    ctx.body={
      code:record.status,
      data:record.data
    }
  }
  //中止build命令
  async stop() {
    const { ctx } = this;
    const number =await this.lastBuildNumber()
    const record = await ctx.curl(`${this.usr}localhost:9000/job/pipeline/${number}/stop`,{
      dataType: 'json',
      method: 'POST',
      contentType: 'json'
    })
    
    ctx.body={
      code:record.status,
      data:record.data,
      number
    }

  }
  //build信息
  async buildInfo() {
    const { ctx } = this;
    const number =await this.lastBuildNumber()
    const record = await ctx.curl(`${this.usr}localhost:9000/job/pipeline/${number}/api/json`,{
      dataType: 'json'
    })
    ctx.body={
      code:record.status,
      data:record.data,
      number
    }
  }
  //最后一次build号码
  async lastBuildNumber() {
    const { ctx } = this;
    const record = await ctx.curl(`${this.usr}localhost:9000/job/pipeline/lastBuild/buildNumber`,{
      dataType: 'json'
    })
    ctx.body={
      code:record.status,
      data:record.data
    }
    return record.data
  }
  
}

module.exports = JenkinsController;