const Commando = require('discord.js-commando');

class diceRollCommand extends Commando.Command {
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a dice.'
        });
    }
    async run(message, args) {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice landed on " +diceRoll);
    }
}

module.exports = diceRollCommand;