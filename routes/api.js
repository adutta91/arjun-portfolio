var express = require('express');
var router = express.Router();

// Mongoose Models
const Skill = require('../mongoose/skill');


router.get('/test', (req, res) => {
    res.json({ success : true });
    // Skill.find({}).exec((err, skills) => {
    //     res.json(skills);
    // });
});

module.exports = router;