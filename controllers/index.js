module.exports = {
  // index作为路由默认值，访问 localhost:3333 就能访问下面的方法
  // cloud使用koa作为http处理框架，ctx即koa context
  // cloud为ctx增加了数个方法：
  // ctx.parse 用来访问后端数据，可以使用的方法有 get post put delete
  // ctx.delayedTask 用来执行延时任务，例如 ctx.delayedTask(10, 'example', 可选参数) 指在10秒钟之后，执行tasks/example方法， 第三个参数为传递给方法的参数
  // ctx.error 用来抛出错误
  // ctx.queue https://github.com/sindresorhus/p-queue的实例，用来执行队列任务
  index (ctx) {
    return ctx.error(500, 'test');
  },
  async softDelete (ctx) {
    let rs = await ctx.parse.put(ctx.path, {
      isDeleted: true
    })
    return rs.data
  }
}
