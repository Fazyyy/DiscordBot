const Commando = require('discord.js-commando');
const giveMeAJoke = require('give-me-a-joke');
const yoMamma = require('yo-mamma').default;
let insult;

var spicy = [
    "To the lady in front of me driving home this morning; It's a speed bump, not a fucking land mine",
    "Is the world ready for ejaculating clocks? I guess we'll know when the time comes.",
    "'Daddy daddy, teacher gave me a gold star in German today, does that mean I'm very good at it?' 'No Rachael, it means the teacher has realised you're a fucking Jew.'",
    "My mate doesn't half come out with some stupid things in the pub. Like his wife.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "How many apples grow on a tree? All of them.",
    "I just watched a program about beavers. It was the best dam program I've ever seen.",
    "Dad, did you get a haircut? No I got them all cut.",
    "What do you call a Mexican who has lost his car? Carlos.",
    "Vegans and meat eaters can finally agree on something - Piers Morgan is a cunt."
]

class jokesCommand extends Commando.Command {
    constructor(client){
        super(client,{
            name: 'joke',
            group: 'simple',
            memberName: 'joke',
            description: 'Tells a joke.'
        });
    }
    async run(message, args) {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        if (diceRoll < 3) {            
            giveMeAJoke.getRandomDadJoke (function(jokeMessage) {
                message.channel.send("How about a Dad joke?");
                message.channel.send(jokeMessage);
            });            
        } else if (diceRoll < 5) {
            message.channel.send("How's yo momma?");
            insult = yoMamma(); 
            message.channel.send(insult);
        } else {
            message.reply("Now things are getting spicy!");
            var jokeMessage = spicy[Math.floor(Math.random()*spicy.length)];
            message.channel.send(jokeMessage);
        }
    }
}

module.exports = jokesCommand;