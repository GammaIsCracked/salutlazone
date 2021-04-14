const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'h!'
client.on('ready', () => {
  const statues = [
    () => `${client.guilds.cache.size} serveurs`,
    () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
  ]
  let i = 0
  setInterval(() => {
      client.user.setActivity(statues[i](), {type: 'PLAYING'})
      i = ++i % statues.length
  }, 1e4)

  console.log(`Logged in as ${client.user.tag}!`);
});





const EventEmitter = require("events");
const { fstat } = require('fs');
const { info, Console } = require('console');
const { Server } = require('http');
const { executionAsyncResource } = require('async_hooks');
const { constants } = require('buffer');
class myEmitter extends EventEmitter{}

var emitter = new myEmitter();
var emitter2 = new myEmitter();

emitter.setMaxListeners(1);
EventEmitter.defaultMaxListeners = 30;

client.on('message', msg => {
  if (msg.content === prefix + 'discord') {
    msg.reply('***https://discord.link/hoatika***');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'pseudo') {
    msg.reply('***est ton pseudo***');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'credit') {
    msg.reply('__***Mad by Gamma__');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'rc') {
    msg.reply('***Nous recrutons des Staff/Suport actif et des animateur . Pour cela ouvret un ticket , Merci !***');
  }
});




client.on("message", message => {
  if(message.content.startsWith(prefix + "help")) {
    if(!message.member.hasPermission("ADD_REACTIONS")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Help")
    .setAuthor("Hoatika")
    .setDescription("__say help :__")
    .setFooter("help mod / help fun / help info")

    message.channel.send(embed1)
  }
});



client.on("message", message => {
  if(message.content.startsWith(prefix + "help mod")) {
    if(!message.member.hasPermission("ADD_REACTIONS")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Mod")
    .setAuthor("Hoatika")
    .setDescription("for moderator")
    .setFooter("h!ban user for ban a user , h!helpeur for give a helpeur role for an user , h!clear (number) for clear some message . in dev ; ) ")

    message.channel.send(embed1)
  }
});


client.on("message", message => {
  if(message.content.startsWith(prefix + "help fun")) {
    if(!message.member.hasPermission("ADD_REACTIONS")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Fun")
    .setAuthor("Hoatika")
    .setDescription("Not util commande ")
    .setFooter("h! humain ; h!pseudo ; in devlopement ;)")

    message.channel.send(embed1)
  }
});



client.on("message", message => {
  if(message.content.startsWith(prefix + "help info")) {
    if(!message.member.hasPermission("ADD_REACTIONS")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Info")
    .setAuthor("Hoatika")
    .setDescription("for this serveur and for the bot")
    .setFooter("h!rc ; h!credit ; h!discord ; h!createur ; h!invite ; h!shop ; in devlopement ;)")

    message.channel.send(embed1)
  }
});







  client.on('message', msg => {
    if (msg.content === prefix + 'createur') {
      msg.reply("regarde en mp !")
      msg.author.send("https://discord.link/hoatika made by Gamma pour le faire rejoindre un autre serveur faite h!invite")
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'invite') {
      msg.reply("regarde en mp !")
      msg.author.send("https://discord.com/api/oauth2/authorize?client_id=807311986370412545&permissions=8&scope=bot")
      msg.author.send("Ajoute moi sur ton serveur pour beneficier de toute les commande ")
    }
  });
    


client.on('message', msg => {
  if (msg.content === prefix + 'humain') {
    msg.reply('***il y a environ 7.059.181.177 sur terre***');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'shop') {
    msg.reply('__***Bonjour , toi qui a de l argent a jeter par la fenetre , vien acheter un grade  avec plein d aventage sur la boutique ! ***___');
  }
});



client.on('message', msg => {
  if (msg.content === prefix + 'shop') {
  member.roles.add("")
  }
});










client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.content.startsWith(prefix + "ban")){
      if(message.member.hasPermission("ADMINISTRATOR")){ 
        
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mentions.bannable){
                    mentions.ban();
                    message.channel.send(mentions.displayName + " a été banni de Hoatika avec succès");

                }
                else {
                    message.reply("impossible de bannir ce membre de Hoatika.");
                }
                
            }
      }  
        
      }   
        else if(message.content.startsWith(prefix + "helpeur")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Member non ou mal mentionné.");
            }
            else {
                mention.roles.add("817674504816951296");
                message.reply(mention.displayName + " a été promu en temps que helpeur sur Hoatika.");
          
          
              
            }
           
        }

    
  
});










client.on("guildMemberAdd", member => {
    console.log("Un nouveau memebre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "8817674505051963404").send(member.displayName + "vien d'arrivé , passe un bon moment sur Hoatika!");
});  

client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "818124744128987167").send("@" + member.displayName + " A quitté Hoatika :sob:");
});














client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("Nombre de message non ou mal défini.");
            }
            else {
                let number = parseInt(args[1]);
                
                if(isNaN(number)){
                   message.reply("Nombre de message non ou mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Supression de " + messages.array.length + "messages réussi !");
                    }).catch(err => {
                       console.log("Erreur de clear : " + err);
                    });
             }
            }
    
        }
     
    }

    
  
        
});




            
              

            

    
  
 
          
                















































client.login('ODA3MzExOTg2MzcwNDEyNTQ1.YB2J4A.yAyPy93hjTgmOPUckjVzmZTt6Pw');