const mineflayer = require('mineflayer')

console.log("بدء الاتصال...")

const bot = mineflayer.createBot({
  host: 'dynamic-9.magmanode.com',
  port: 25711,
  username: 'Sank_Bot' + Math.floor(Math.random() * 1000),
  version: false,
  auth: 'offline'
})

bot.on('login', () => {
  console.log('تم تسجيل الدخول ✅')
})

bot.on('spawn', () => {
  console.log('دخل السيرفر 🔥')
  
  // يتحرك حتى ما ينكشف
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)
  }, 10000)
})

bot.on('error', (err) => {
  console.log('خطأ ❌:', err.message)
})

bot.on('end', () => {
  console.log('انقطع ❌')
})
