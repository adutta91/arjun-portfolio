var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create a schema
var testItemSchema = new Schema({
    itemId: Number,
    item: String,
    completed: Boolean
}, { collection: "test" });

// we need to create a model using it
var TestItems = mongoose.model('test', testItemSchema);

module.exports = TestItems;