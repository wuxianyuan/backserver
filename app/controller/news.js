const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const pic = await ctx.service.news.pic();
    // const result = await ctx.curl('https://www.qqlykm.cn/api/yiyan/');
    await ctx.render('news/list.tpl', { list: [{url:1,title:2}] });
  }
}

module.exports = NewsController;