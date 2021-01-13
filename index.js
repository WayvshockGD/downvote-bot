const Discord = require('discord.js');
const { token, clientid, properties: { trigger }, $emote: { id }} = require('./config.json');
let client = new Discord.Client()

client.on('ready', 
() => {
    console.info('Ready for downvoting :)')
})

client.on('message',
async ( message ) => {
    if ( message.content.includes(trigger) )
    {
            await message.react(id)
    } 
    
    if ( message.content.includes("<@!" + clientid + ">") 
    || message.content.includes("<@" + clientid + ">"))
    {
        message.channel.send("lmao i have no prefix")
    }
})

client.login(token)