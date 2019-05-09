const express = require('express');
const async = require('async');
const router = express.Router();
const _ = require("lodash");

// Mongoose Models
const Skill = require('../mongoose/skill');
const Project = require('../mongoose/project');


// --------------------------------------------------
// Skills
// --------------------------------------------------

// fetches all skills
router.get('/skills', (req, res) => {
    Skill.find({}).exec((err, skills) => {
        res.send(skills);
    });
});

// creates skills
router.post('/skills', (req, res) => {
    if (req.body.skills && req.body.skills.length) {
        async.forEach(req.body.skills, (skill, acb) => {
            if (validate(skill, ['name', 'logo'])) {
                let newSkill = new Skill({
                    name: skill.name,
                    logo: skill.logo
                });

                newSkill.save(acb);
            } else {
                acb(`Incomplete skill params for ${skill.name}`);
            }
        }, (err) => {
            if (err) {
                return res.send({ success: false, msg: err });
            } else {
                return res.send({ success: true });
            }
        });
    } else {
        res.json({ success: false, msg: 'No skills provided in request body' });
    }
});

// fetches a single skill
router.get('/skills/:id', (req, res) => {
    // console.log('req.params *****---->>>', req.params);
    res.send({});
});

// deletes a single skill
router.delete('/skills/:id', (req, res) => {
    res.send({});
});

// --------------------------------------------------
// Projects
// --------------------------------------------------


// fetches a all projects
router.get('/projects', (req, res) => {
    Project.find({}).exec((err, skills) => {
        res.send(skills);
    });
});


// creates projects
router.post('/projects', (req, res) => {
    if (req.body.projects && req.body.projects.length) {
        async.forEach(req.body.projects, (project, acb) => {
            if (validate(project, ['title', 'description', 'sampleCode'])) {
                let newProject = new Project({
                    title: project.title,
                    description: project.description,
                    sampleCode: project.sampleCode,
                    links: project.links || {},
                    skills: project.skills || []
                });

                newProject.save(acb);
            } else {
                acb(`Incomplete project params for ${project.title}`);
                
            }
        }, (err) => {
            if (err) {
                return res.send({ success: false, msg: err });
            } else {
                return res.send({ success: true });
            }
        });
    } else {
        res.json({ success: false, msg: 'No skills provided in request body' });
    }
});

function validate(data, required) {
  let result = true;
  
    _.forEach(required, (param) => {
       if (!data[param]) result = false; 
    });
  
  return result;
};


module.exports = router;