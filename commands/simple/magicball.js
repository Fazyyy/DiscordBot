const Commando = require('discord.js-commando');

let diceroll;
var responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

class magicBallCommand extends Commando.Command {
    constructor(client){
        super(client,{
            name: '8ball',
            group: 'simple',
            memberName: '8ball',
            description: 'Rolls a magic 8-Ball.'
        });
    }
    async run(message, args) {
        diceroll = Math.floor(Math.random() * 20);
        message.reply(responses[diceroll]);
        
    }
}

module.exports = magicBallCommand;