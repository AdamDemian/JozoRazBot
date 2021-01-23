const ms = require('ms');

module.exports = {
    name: 'nute',
    description: 'Nute na kolko chces',
    execute(message, args){
        const target = message.mentions.users.first();

        if(message.member.roles.cache.has('779399046170148875', '725664654025818122')){
            Mute();
        } else{
            message.channel.send('Nemáš oprávnenie na tento príkaz. :FeelsBadMan:')
        } 

        function Mute(){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === '🧍Človek🧍');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);

                if(!args[1]){
                    memberTarget.roles.remove(mainRole).id;
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> je už ticho, kokot.`);
                    return;
                }
                memberTarget.roles.remove(mainRole).id;
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> je už ticho, na ${ms(ms(args[1]))}, kokot`)

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else{
                message.channel.send('Nenašiel som tohto uživateľa.');
            }
        } 
    }
}