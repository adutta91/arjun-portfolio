import axios from 'axios';
import { skillLogos } from './app'

import { skillsReceived } from './actions';

// TODO: fix api
const skills = [
    {
        name: 'javascript',
    },
    {
        name: 'react'
    },
    {
        name: 'redux'
    },
    {
        name: 'node'
    },
    {
        name: 'mysql'
    },
    {
        name: 'sequelize'
    },
    {
        name: 'jquery'
    },
    {
        name: 'html'
    },
    {
        name: 'css'
    },
    {
        name: 'sass'
    },
    {
        name: 'express'
    },
    {
        name: 'github'
    },
    {
        name: 'npm'
    },
    {
        name: 'webpack'
    },
]

export const fetchSkills = () => {
    skillsReceived(Object.values(skillLogos).map(obj => ({
        name: obj.name,
        logo: obj.file
    })));
    return
    axios.get('/api/skills').then(function (response) {
        skillsReceived(response.data);
    }).catch(function (error) {
        // handle error
        console.log(error);
    });
}