const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); // Heeeeeemo
    console.log('')
    console.log(' ╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log(' ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
    client.user.setActivity("#js",{type: 'WATCHING'}); //Heeeeeemo Heeeeeeeeeemo 
});

const code = '#';

client.on('message',async message => {
    if(message.content.startsWith(code + "js")) {
  if(!message.channel.guild) return message.reply(' ');
    let rank = message.guild.member(message.author).roles.find('name', 'Deputy');
    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة Deputy لأستخدام هذا الأمر.**');
    let jscodes = message.guild.channels.find(`name`, "ss");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Superme Codes© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 
                   }
                 });
               });
             });
           });
         });
       });
     });
   }
});

client.on('message', async (message) => {
  if(message.content.startsWith("#تقديم")) {
    await message.channel.send("** ما لغتك؟**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
      .then(collected => {
        lan = collected.first().content
        collected.first().delete()
        e.delete();
        message.channel.send('** ما خبرتك؟**').then(m => {
        let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            message.channel.send('**من متي وانت تبرمج؟**').then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                message.channel.send('جاري التقديم ..').then(b => {
                setTimeout(() => { 
                  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
                },2000);
                var gg = message.guild.channels.find('name', '✻-التقديمات')
                if(!gg) return;
                if(gg) {
                  gg.send({
                      embed : new Discord.RichEmbed()
                      .setDescription(`** اللغة :question: : \n ${lan}\nالخبرة :link: :\n ${md} \nالمدة :question: :\n ${br} \nتم التقديم بواسطة : <@${message.author.id}> **`)
                      .setFooter(`Superme™`)
                      .setTimestamp()
                    });
                  } 
                })
              })
            })
          })
        })
      })
    })
  }
})


client.on('message', message => {
   if(message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("000000").setColor('#36393e')
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Superme Codes™")
      message.channel.sendEmbed(embed)
              const Embed11 = new Discord.RichEmbed()
        .setColor("000000").setColor('#36393e')
        .setDescription(`
**-------------------
-هذا هو الرابط : https://discord.gg/JZhfFW
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("S.C")
      message.author.sendEmbed(Embed11)
    }
});
          

client.on('guildMemberAdd', Ammar=> {
    var embed = new Discord.RichEmbed()
    .setAuthor(Ammar.user.username, Ammar.user.avatarURL)
    .setThumbnail(Ammar.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Ammar.user.id, true)
    .addField('``تاق العضو``', Ammar.user.discriminator, true)
    .addField('``تم الانشاء في``', Ammar.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Ammar.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Ammar.guild.name, Ammar.guild.iconURL, true)
    var channel =Ammar.guild.channels.find('name', 'ss') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on('message', message => {

    if (message.content === "#count") {

    let embed = new Discord.RichEmbed()

.addField('Count: ' , message.guild.memberCount)
.setColor("RANDOM")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});



client.on('message', message => {
         if (message.content === "#dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'Morning';
            if (hours >= 12) {
                suffix = 'Evening';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『Date & Time』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('UAE',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('KSA',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('Egypt',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });






client.login(process.env.BOT_TOKEN)
