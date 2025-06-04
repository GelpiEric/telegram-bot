require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Ottieni il token dalle variabili d'ambiente
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('BOT_TOKEN non trovato nelle variabili d\'ambiente');
  process.exit(1);
}

// Crea una nuova istanza del bot
const bot = new TelegramBot(token, { polling: true });

// /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Ciao! Sono F1 Connect Bot 🏎️\nUsa /help per scoprire tutti i comandi disponibili!');
});

// /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `
📋 *Comandi disponibili:*
/start - Avvia il bot e scopri tutte le funzionalità disponibili
/help - Mostra questo messaggio di aiuto
/info - Informazioni sul bot
/news - Mostra le ultime notizie dal mondo della Formula 1
/calendar - Visualizza il calendario aggiornato delle gare
/classifica - Consulta le classifiche piloti e costruttori
/quiz - Inizia un quiz sulla F1 per guadagnare punti e premi
/fantasy - Gestisci il tuo team di Fantasy F1
/community - Accedi ai gruppi tematici della community
/profilo - Visualizza o modifica il tuo profilo utente
`, { parse_mode: 'Markdown' });
});

// /info
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `
ℹ️ *F1 Connect Bot*
Bot creato durante il corso di Containerizzazione e Deployment.
Versione: 1.0.0
Ambiente: ${process.env.NODE_ENV || 'development'}
`, { parse_mode: 'Markdown' });
});

// /news
bot.onText(/\/news/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '📰 Ultime notizie sulla Formula 1:\n(qui andranno integrate le API o contenuti dinamici)');
});

// /calendar
bot.onText(/\/calendar/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '📆 Calendario gare F1:\n(da implementare con dati ufficiali o statici)');
});

// /classifica
bot.onText(/\/classifica/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🏁 Classifiche piloti e costruttori:\n(aggiornamenti in arrivo)');
});

// /quiz
bot.onText(/\/quiz/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🧠 Inizia il quiz F1!\n(Domande in arrivo...)');
});

// /fantasy
bot.onText(/\/fantasy/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🎮 Gestisci il tuo team di Fantasy F1:\n(funzione in sviluppo)');
});

// /community
bot.onText(/\/community/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '💬 Accedi alla community e ai gruppi tematici:\n(link o funzioni in arrivo)');
});

// /profilo
bot.onText(/\/profilo/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '👤 Gestione del profilo utente:\n(questa funzione sarà integrata in seguito)');
});

// Messaggi non riconosciuti
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  const knownCommands = [
    '/start', '/help', '/info', '/news',
    '/calendar', '/classifica', '/quiz',
    '/fantasy', '/community', '/profilo'
  ];

  if (msg.text && !knownCommands.includes(msg.text.split(' ')[0])) {
    bot.sendMessage(chatId, '❓ Comando non riconosciuto. Usa /help per vedere i comandi disponibili.');
  }
});

console.log('✅ Bot avviato con successo!');
