require('dotenv').config();
const { Telegraf } = require('telegraf');

// Инициализация бота с токеном из файла .env
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработка команды /start
bot.start((ctx) => {
  ctx.reply('Привет! Нажми на кнопку ниже, чтобы открыть Mini App', {
    reply_markup: {
      inline_keyboard: [
        [{ 
            text: 'Открыть Mini App', 
            // Ссылка, которую тебе выдал Vercel
            web_app: { url: 'https://dorday-project.vercel.app' } 
        }]
      ]
    }
  });
});

// Запуск бота
bot.launch()
  .then(() => console.log('Бот успешно запущен!'))
  .catch((err) => console.error('Ошибка при запуске бота:', err));

// Корректная остановка бота при выключении компьютера или сервера
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));