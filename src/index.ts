import config from './config';
import { Telegram } from 'puregram';

const bot = Telegram.fromToken(config.TOKEN);

bot.updates.on('message', context => context.reply('Hey!'));
bot.updates.on('callback_query', context => context.answerCallbackQuery());

bot.updates.startPolling();