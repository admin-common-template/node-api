'use strict';
const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 用户登录
  async login() {
    const { ctx } = this;
    const { userName, password } = ctx.request.body;
    console.log('==', userName, password);
    if (!userName || !password) {
      ctx.body = {
        code: 1,
        msg: '用户名或密码不能为空',
      };
      return;
    }
    const res = await ctx.service.users.login(userName);
    if(res) {
      if(userName === res.userName && password === res.password) {
        ctx.body = {
          code: 0,
          msg: '登录成功'
        }
        return
      }
    }
    ctx.body = {code: 2, msg: '用户名或密码错误'}
  }
}
module.exports = UsersController;
