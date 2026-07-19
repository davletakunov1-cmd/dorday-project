bot.start((ctx) => {
  ctx.reply('Привет! Нажми на кнопку ниже, чтобы открыть Mini App', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть Mini App', web_app: { url: 'ССЫЛКА_НА_ВАШ_САЙТ' } }]
      ]
    }
  });
});