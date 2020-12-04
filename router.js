// TODO: 注意 这个页面的路由仅作为示例，项目使用时应删除
module.exports = [
  {
    // 该路由的含义为禁止删除用户的操作
    route: 'DELETE /classes/_User/:id',
    deny: true,
  },
  {
    // 将一个对数据后端的路由转给另一个路由
    redirect: '/index/softDelete',
    // 你可以传入多个路由，route与routes必须存在一个
    routes: [
      'DELETE /classes/order',
    ]
  },
  {
    // 在路由执行前后执行hook方法，你还可以使用afterHooks
    beforeHooks: ['softDelete'],
    // 你可以传入多个路由，route与routes必须存在一个
    routes: [
      'GET /classes/order',
    ]
  },
]
