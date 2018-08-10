import axios from 'axios';

import { skillsReceived } from './actions';

export const fetchSkills = () => {
    axios.get('/api/skills').then(function (response) {
        skillsReceived(response.data);
    }).catch(function (error) {
        // handle error
        console.log(error);
    });
}