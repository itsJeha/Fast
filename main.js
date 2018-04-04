const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '?name') {
    msg.reply('Hey, my name is Fast');
    }
  if (msg.content === '?juan') {
    msg.reply('I love u Juan');
  }
});

client.login(process.env.CLIENT_TOKEN);
