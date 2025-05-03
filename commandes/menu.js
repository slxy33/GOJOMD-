module.exports = {
  name: "menu",
  description: "Meni prensipal bot la",
  run: async (client, message, args) => {
    const menu = `🎛️ *GOJOMD MENU* 🎛️

╭━━━⊱ *Owner* ⊰━━━╮
┃ Nom: ${require('../set').NOM_OWNER}
┃ Prefix: ${require('../set').PREFIXE}
╰━━━━━━━━━━━━━━━━━╯

╭━━⊱ *Kategori* ⊰━━╮
┃ *❯ IA*
┃ *❯ Anime*
┃ *❯ Group*
┃ *❯ Fun*
┃ *❯ Download*
╰━━━━━━━━━━━━━━━━━━╯

Powered by ZOKOU style.
`;
    await message.reply(menu);
  }
};
