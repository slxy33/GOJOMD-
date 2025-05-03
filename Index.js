const fs = require('fs');
const path = require('path');

// Chemen kote kòmand yo ye
const commandesPath = path.join(__dirname, 'commandes');

// Li tout fichye .js nan katab commandes la epi chaje yo
fs.readdirSync(commandesPath).forEach(file => {
    if (file.endsWith('.js')) {
        require(`./commandes/${file}`); // Chaje chak fichye kòmand
    }
});
