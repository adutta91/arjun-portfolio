var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create a schema
var projectSchema = new Schema({
    title: String,
    description: String,
    sampleCode: String,
    skills: Array,
    links: Object,
}, { collection: "projects" });

// we need to create a model using it
var Project = mongoose.model('projects', projectSchema);

module.exports = Project;