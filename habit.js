const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const dotenv = require("dotenv").config();

const client = new CommandoClient({
  commandPrefix: "?",
  owner: process.env.BOT_OWNER_ID,
});
client.on("ready", async () => {
  client.registry
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, "commands"));
});

client.login(process.env.BOT_TOKEN);
