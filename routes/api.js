var express = require('express');
var router = express.Router();

// Mongoose Models
const Skill = require('../mongoose/skill');


router.get('/test', (req, res) => {
    Skill.find({}).exec((err, skills) => {
        res.json(skills);
    });
});

module.exports = router;