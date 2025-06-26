const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🤖 Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (msg === '!ping') {
    message.reply('🏓 Pong!');
  }

  if (msg === '!ajuda') {
    message.reply(
      '**📋 Comandos disponíveis:**\n' +
      '`!ping` - Teste de conexão\n' +
      '`!ajuda` - Mostra essa lista\n' +
      '`!bomdia` - Receba uma mensagem alegre ☀️\n' +
      '`!sobre` - Saiba mais sobre o bot 🤖'
    );
  }

  if (msg === '!bomdia') {
    message.reply('🌞 Bom diaaa, flor do dia! Que sua jornada seja iluminada e doce como lilás pastel! 💜');
  }

  if (msg === '!sobre') {
    message.reply('✨ Eu sou o bot da May, feito com carinho em Node.js + Discord.js! Estou aqui para trazer alegria, ajuda e muita cor ao seu servidor. 💫');
  }
});

client.login(process.env.DISCORD_TOKEN);
