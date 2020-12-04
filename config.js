module.exports = {
  api: 'https://api.cun.mokekeji.com',
  appid: 'f6tKQTEpQLU4RhvmAKH3nGD9SXcGld5V',
  masterKey: 'BcnByn8LwmOL81DijK2jxcpABPo6S2wi',
  // 定时任务，cron为linux通用计时方式，参考 https://www.jianshu.com/p/1defb0f22ed1
  schedule: [
    // 该示例含义为每10秒执行一次 tasks/example 任务
    // {
    //   cron: '0/10 * * * * *',
    //   task: 'example',
    // },
  ]
}
