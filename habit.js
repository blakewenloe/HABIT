const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const dotenv = require("dotenv").config();
const client_id = process.env.CLIENT_ID;

const client = new CommandoClient({
  commandPrefix: "?",
  owner: process.env.BOT_OWNER_ID,
  invite: `https://discord.com/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=8`,
});

client.registry
  .registerDefaults()
  // Registers all of your commands in the ./commands/ directory
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
});

client.on("error", console.error);

client.login(process.env.BOT_TOKEN);
