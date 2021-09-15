const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("GREEN")
 .setAuthor(`${client.user.username} Information`,client.user.displayAvatarURL())
 
    
.addField(`
**DEVELOPERS**`,
`Prabhat#4788 `)

.addField(`**PLATFORM**`,
`WINDOWS 10`)

.addField(`**SERVERS**`,
`${client.guilds.cache.size} servers`)

.addField(`**PING**`,
`${client.ws.ping}ms`)

.addField(`**GUILD ID**`,
`${message.guild.id}`)





message.channel.send(embed)
}}