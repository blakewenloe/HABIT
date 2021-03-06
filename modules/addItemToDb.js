const db = require("../db.js");

const addGroceryItem = async (qty, item, message) => {
  try {
    const insertGroceryItem = await db.create({
      fooditem: item,
      quantity: qty,
    });
    message.say(`${qty} ${item} added to list`);
    return;
  } catch (e) {
    console.log(e);
    // Return error if item already added
    if (e.name === "SequelizeUniqueConstraintError") {
      message.say(`${item} already added.`);
    } else {
      message.say("Something went wrong with adding this item.");
    }
    return;
  }
};
module.exports = addGroceryItem;
