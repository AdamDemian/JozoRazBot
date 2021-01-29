module.exports = {
    name: 'kubo',
    description: 'kubo prikaz',
    execute(message, args){

        if(message.member.roles.cache.has('799529818138869791')){
            message.channel.send('https://www.youtube.com/channel/UCFipUpyN8InYLnuFx6X78yg ' + ' https://www.twitch.tv/shitsuko__');
        }
        else{
            message.channel.send('Nemáš oprávnenie pre tento príkaz, pridám ti rolu 🧍Človek🧍. Skús to ešte raz.');
            message.member.roles.add('799529818138869791');
        }
    }
}