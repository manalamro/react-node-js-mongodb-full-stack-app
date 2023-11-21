const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemStatus: {
    type: String,
    required: true,
  },
  itemNumber: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
