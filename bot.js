const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
  try{
  let link = await bot.generateInvite(["READ_MESSAGES", "SEND_MESSAGES"]);
  console.log(link);
} catch(e) {
  console.log(e.stack);
}
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let condition = "";
  if(messageArray.length > 1){
    condition = messageArray[1];
  }
  condition = Number(condition);
  if(!command.startsWith(botSettings.prefix)) return;

  if(command === `${botSettings.prefix}roll`){
    console.log(command);
    if(Math.floor(parseInt(condition)) > 0){
      let random = Math.floor(Math.random() * condition) + 1;
      let string = "1-" + condition + ": " + random
      message.channel.send(string);
    } else {
      let random = Math.floor(Math.random() * 100) + 1;
      let string = "1-100: " + random;
      message.channel.send(string);
    }
  }

  if(command === `${botSettings.prefix}artifact`){
    message.channel.send("Just play artifact, the only card game with no rng.");
  }

  if(command === `${botSettings.prefix}tusk`){
    const smug = "<:SMUG:373614914704769025>"
    message.channel.send("Tusk spammers " + smug);
  }

  if(command === `${botSettings.prefix}valvetime`){
      message.channel.send("Soon™")
  }

  if(command === `${botSettings.prefix}trivia`){
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

bot.login(botSettings.token);
