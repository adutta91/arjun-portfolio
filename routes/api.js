var express = require('express');
var router = express.Router();

// Mongoose Models
const Skill = require('../mongoose/skill');


router.get('/test', (req, res) => {
    res.json({ success : true });
});

// fetches all skills
router.get('/skills', (req, res) => {
    Skill.find({}).exec((err, skills) => {
        res.json(skills);
    });
});

// creates a skill
router.post('/skills', (req, res) => {
    res.json({}); 
});

// fetches a single skill
router.get('/skills/:id', (req, res) => {
    console.log('req.params *****---->>>', req.params);
    res.json({}); 
});

// deletes a single skill
router.delete('/skills/:id', (req, res) => {
    res.json({});
});

module.exports = router;