const Commando = require('discord.js-commando');

class funMirrorCommand extends Commando.Command {
    constructor(client){
        super(client,{
            name: 'funmirror',
            group: 'simple',
            memberName: 'funmirror',
            description: 'Looks at your reflection in a mirror.'
        });
    }
    
    async run(message, args) {
        message.reply(message.author.avatarURL);
    }
}

module.exports = funMirrorCommand;