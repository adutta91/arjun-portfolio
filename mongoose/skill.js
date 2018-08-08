var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create a schema
var skillSchema = new Schema({
    skillId: Number,
    name: String,
    logo: String
}, { collection: "skills" });

// we need to create a model using it
var Skill = mongoose.model('skills', skillSchema);

module.exports = Skill;