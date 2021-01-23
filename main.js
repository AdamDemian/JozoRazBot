const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "jožo ";

const fs = require('fs');
const { Agent } = require('http');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
} 



client.once('ready', () => {
    console.log('Online!');
    client.user.setActivity('Caba, neblázni')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.command.get('ping').execute(message, args);
    }
    else if(command === 'pong'){
        message.channel.send('ping!');
    }
    else if(command === 'kubo'){
        client.command.get('kubo').execute(message, args);
    }
    if(command === ''){
        message.channel.send('drž piču');
    }
    else if(command === 'zahraj'){
        message.channel.send('-p David Guetta Feat. Kid Cudi - Memories');
    }
    if(command === 'cc'){
        message.channel.send('Čau ty bzdocha, ako?');
    }
    if(command === 'ahoj'){
        message.channel.send('Čau ty bzdocha, ako?');
    }
    if(command === 'cs'){
        message.channel.send('Čau ty bzdocha, ako?');
    }
    if(command === 'čau'){
        message.channel.send('Čau ty bzdocha, ako?');
    }
    if(command === 'dobre'){
        message.channel.send('Kto sa ťa pýtal?');
    }
    if(command === 'ppč'){
        message.channel.send('Kto sa ťa pýtal?');
    }
    if(command === 'super'){
        message.channel.send('Kto sa ťa pýtal?');
    }
    if(command ===  `špekulant`){
        message.channel.send('drž piču');
    }

    else if(command === 'mute'){
        client.command.get('nute').execute(message, args);
    }
    else if(command === 'unmute'){
        client.command.get('unmute').execute(message, args);
    }

    if(command === 'image'){
        client.command.get('image').execute(message, args);
    }
});

client.login('ODAyNTAxNDQzOTA1OTEyODMy.YAwJtQ.LrWs_fiUdN10bSSOa73gTsCBoaE');
