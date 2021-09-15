const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("Help comammd",client.user.displayAvatarURL())
 .setURL(`https://github.com/ProVPrabhat`)
.setDescription(`

**Everyone comammds**
\`clear,join,leave,loop,move,nowplaying,pause,play,previous,queue,remove,resume,search,skip,seek,stop,volume\`

**Filters commands**
\`24/7,bass,bassboost,deepbass,earrape,nightcore,pitch,pop,reset,soft,speed,television,vaporwave\`

**Utility commands**
\`about,prefix,lava,uptime,invite\`

**INFO**
[Invite Me](https://dsc.gg/skyla) | [Support Server](https://discord.gg/CGvakgbK3K)
`)
 
.setFooter("Made by Prabhat #4788")
message.channel.send(embed)
  }
}