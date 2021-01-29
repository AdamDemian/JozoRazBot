module.exports = {
    name: 'ping',
    description: 'ping prikaz',
    execute(message, args){
        message.channel.send('pong!');
    }
}