const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "."
});

const TOKEN = 'NTMwNzcxNjk5OTM5OTM0MjA4.DxESlA.bjsGRtXd4foubA0UtsML3sPcqGw';
var forbiddenWords = [
    "arse",
    "bloody",
    "bugger",
    "cow",
    "crap",
    "damn",
    "ginger",
    "git",
    "god",
    "goddam",
    "gesus Christ",
    "ginger",
    "sod-off",
    "arsehole",
    "balls",
    "bint",
    "bitch",
    "bollocks",
    "bullshit",
    "feck",
    "munter",
    "pissed",
    "shit",
    "bitch",
    "tits ",
    "bastard",
    "beef curtains",
    "bellend",
    "bloodclaat",
    "clunge",
    "cock",
    "dick",
    "fanny",
    "gash",
    "knob",
    "minge",
    "prick",
    "punani",
    "pussy",
    "snatch",
    "twat",
    "cunt",
    "fuck",
    "motherfucker"
]

var forbiddenArr = [
    "https://i.imgur.com/u4hNogS.jpg",
    "Naughty naughty! No swearing!",
    "Stop it."
]


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerCommandsIn(__dirname + '/commands');
bot.registry.registerDefaults();

global.servers = {};

bot.on('ready',function(){
    console.log("Ready");
});

setInterval (function () {
    bot.channels.get("521372392132706331").send("I'm driving right now")
    .catch(console.error);
}, 1 * 3600000); 

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.channel.send('pong');
    }
    if (msg.content === 'anal') {
        msg.channel.send('baby');
    }
    if (msg.content === 'marco') {
        msg.channel.send('polo');
    }
    if (msg.content.includes("cookie")) {
        msg.channel.send('COOKIE?!');
    }
    for (var i = 0; i < forbiddenWords.length; i++) {
        if (msg.content.toLowerCase().includes(forbiddenWords[i])) {
            var forbiddenResponse = forbiddenArr[Math.floor(Math.random()*forbiddenArr.length)];
            msg.channel.send(forbiddenResponse);
            break;
        }
    }

  });

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newChannel = newMember.voiceChannel;
    let oldChannel = oldMember.voiceChannel;
    if (oldChannel == newChannel) return;
    let textChannel = newMember.guild.channels.get('521372392132706331');

    if(oldChannel === undefined && newChannel !== undefined) {
    //If user is join voice
        if (newMember.id == 210561524731871232) {
            textChannel.send(`Hi Robert!`);
        } else if (newMember.id == 230766082963537921) {
            textChannel.send(`Hi Jaimie!`);
        } else if (newMember.id == 311253783587848194) {
            textChannel.send("Oh no, It's kevin...");
        } else {
            textChannel.send(`${newMember} has joined the voice channel.`);
        }
   
    } else if(newChannel === undefined){
    //If user is leaving voice channel 
    }
});

bot.login(TOKEN);