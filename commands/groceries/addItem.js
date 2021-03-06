const { Command } = require("discord.js-commando");
const addGroceryItem = require("../../modules/addItemToDb.js");

module.exports = class AddGroceries extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "addfood",
      aliases: ["add"],
      group: "groceries",
      memberName: "add groceries",
      description: "adds item to grocery list",
      args: [
        {
          key: "qty",
          prompt: "How many of this item should I add?",
          type: "integer",
        },
        {
          key: "food",
          prompt: "What item would you like to add?",
          type: "string",
          validate: (text) => text.length < 40,
        },
      ],
    });
  }
  run(message, { qty, food }) {
    try {
      addGroceryItem(qty, food, message);
    } catch (e) {
      console.log(e);
    }
  }
};
