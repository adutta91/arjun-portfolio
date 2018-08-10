var express = require('express');
const async = require('async');
var router = express.Router();

const mongoose = require('mongoose');
// TODO: figure out environment variables
// mongoose.connect('mongodb://localhost:27017/local');
mongoose.connect('mongodb://portfolio:mongobongo42@ds113942.mlab.com:13942/arjun_portfolio');

var db = mongoose.connection;
db.on('error', () => { console.log('---FAILED to connect to mongoose') });
db.once('open', () => {
    console.log('+++Connected to mongoose');
});

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

// creates skills
router.post('/skills', (req, res) => {
    if (req.body.skills && req.body.skills.length) {
        async.forEach(req.body.skills, (skill, acb) => {
            if (skill.name && skill.logo) {
                let newSkill = new Skill({
                    name : skill.name,
                    logo : skill.logo
                });
                
                newSkill.save(acb);
            } else {
                acb(null);
            }
        }, (err) => {
           if (err) {
                return res.json({ success : false, msg : err });
           } else {
                return res.json({ success : true });
           }
        });
    } else {
        res.json({ success : false, msg : 'No skills provided in request body' });
    }
});

// fetches a single skill
router.get('/skills/:id', (req, res) => {
    // console.log('req.params *****---->>>', req.params);
    res.json({}); 
});

// deletes a single skill
router.delete('/skills/:id', (req, res) => {
    res.json({});
});

// counter helper
function getNextSequenceValue(sequenceName) {
    var sequenceDocument = db.counters.findAndModify({
        query: { _id: sequenceName },
        update: { $inc: { sequence_value: 1 } },
        new: true
    });

    return sequenceDocument.sequence_value;
}



module.exports = router;