module.exports = {
    name: 'unmute',
    description: 'Umute koho chces',
    execute(message, args){
        const target = message.mentions.users.first();

        if(message.member.roles.cache.has('779399046170148875', '725664654025818122')){
            Unmute();
        } else{
            message.channel.send('Nemáš oprávnenie na tento príkaz. :FeelsBadMan:')
        } 

        function Unmute(){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === '🧍Človek🧍');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);
    
                memberTarget.roles.remove(muteRole).id;
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> už je v pohode dúfam.`)
            } else{
                message.channel.send('Nenašiel som tohto uživateľa.');
            }
        } 
    }
}