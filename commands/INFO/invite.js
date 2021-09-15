const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("INVITE Mr.Music",client.user.displayAvatarURL())
.setDescription(`

[Mr.Music](https://dsc.gg/skyla)

[Support Server](https://discord.gg/CGvakgbK3K)
`)
message.channel.send(embed)


}}