'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  /**
   * 用户登录
   */
  async login(userName) {
    const { ctx } = this;
    try {
      const results = await ctx.model.Users.findOne({userName});
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = UsersService;
