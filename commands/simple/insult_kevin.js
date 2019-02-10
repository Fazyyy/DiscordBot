const Commando = require('discord.js-commando');

var insult = [
    "If laughter is the best medicine, Kevin's face must be curing the world.",
    "If I had a face like Kevin's, I'd sue my parents.",
    "I guess Kevin proves that even god makes mistakes sometimes.",
    "He's so fake, Barbie is jealous.",
    "I’m jealous of people that don’t know him!",
    "Kevin must have been born on a highway because that's where most accidents happen.",
    "Some babies were dropped on their heads but Kevin was clearly thrown at a wall.",
    "I'd slap Kevin, but that would be animal abuse.",
    "They say opposites attract. I hope Kevin meets someone who is good-looking, intelligent, and cultured.",
    "Kevin is trying to be a smart ass, he's just an ass.",
    "The last time I saw something like Kevin, I flushed it.",
    "Kevin has Diarrhea of the mouth; constipation of the ideas.",
    "His mind is on vacation but his mouth is working overtime.",
    "Is Kevin always this stupid or is today a special occasion?"
]

class insultKevinCommand extends Commando.Command {
    constructor(client){
        super(client,{
            name: 'ikev',
            group: 'simple',
            memberName: 'ikev',
            description: 'Insults Kevin.'
        });
    }
    async run(message, args) {
            var jokeMessage = insult[Math.floor(Math.random()*insult.length)];
            message.channel.send(jokeMessage);
    }
}

module.exports = insultKevinCommand;