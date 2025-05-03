const { Client } = require('whatsapp-web.js'); // Import WhatsApp Web Client
const fs = require('fs');
const qr = require('qrcode-terminal');
const sessionFilePath = './session.json';

// Si gen yon sesyon ki deja egziste, li li soti nan session.json
let sessionData;
if (fs.existsSync(sessionFilePath)) {
    sessionData = require(sessionFilePath);
}

// Kreye yon nouvo client WhatsApp
const client = new Client({
    puppeteer: { headless: true },
    session: sessionData, // Sèvi ak sesyon si li egziste
});

// Fè kòd sa a kouri lè client la pare
client.on('qr', (qrCode) => {
    // Affiche QR code a nan terminal la pou ou ka eskane li
    qr.generate(qrCode, { small: true });
    console.log('QR code generated, please scan it with your phone.');
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

// Lè sesyon an fini, li pral sove nan session.json
client.on('authenticated', (session) => {
    console.log('Bot authenticated');
    fs.writeFileSync(sessionFilePath, JSON.stringify(session));
});

// Handle incoming messages
client.on('message', (message) => {
    console.log(message.body); // Sa ap montre mesaj ki resevwa yo
    if (message.body === 'ping') {
        message.reply('pong');
    }
});

// Kòmanse bot la
client.initialize();
