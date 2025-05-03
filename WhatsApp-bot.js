// Enpòte WWebJS
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Kreye yon nouvo kliyan ak LocalAuth pou sove sesyon an
const client = new Client({
    authStrategy: new LocalAuth()  // Sa pèmèt ou sove sesyon an lokalman
});

// Lè QR Code a parèt, li ap montre nan terminal ou
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Skanè QR Code sa a avèk telefòn ou.');
});

// Lè kliyan an pare, li ap montre sa nan terminal
client.on('ready', () => {
    console.log('Bot lan pare!');
});

// Si otantifikasyon reisi
client.on('authenticated', (session) => {
    console.log('Sesyon verifye!');
    // Ou ka sove "session" sa si ou vle, men LocalAuth ap okipe sa otomatikman
});

// Si gen yon erè otantifikasyon
client.on('auth_failure', (message) => {
    console.log('Otifikasyon echwe:', message);
});

// Lè kliyan an dekonekte
client.on('disconnected', (reason) => {
    console.log('Kliyan an dekonekte:', reason);
});

// Inisyalize bot lan
client.initialize();
