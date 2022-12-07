const TelegramBot = require("node-telegram-bot-api");

// const bot = new Telegraf("5812244101:AAFqvGtDMrH0L5TLfBq6dRRd1eDsCbEiPOg");
const web_link = "https://merry-pixie-41bbb3.netlify.app/";
//
// const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = "5812244101:AAFqvGtDMrH0L5TLfBq6dRRd1eDsCbEiPOg";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появиться кнопка", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "закажи еду сейчас", web_app: { url: web_link } }],
        ],
      },
    });
  }
  await bot.sendMessage(chatId, "Хочеш поесть?", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "закажи еду сейчас", web_app: { url: web_link } }],
      ],
    },
  });
});
