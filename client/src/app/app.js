import React from 'react';
import { map } from 'lodash';
import $ from 'jquery';

export const goTo = (url) => {
  if (url) window.open(url, '_blank');
};

export const scrollToId = (id) => {
  if (!id) return;
  $('html, body').animate({
    scrollTop: $(`#${id}`).offset().top
  }, 500);
}

export const linkIdentifier = ':l';

export const landingMessage = `import Developer from 'world';

let arjun = new Developer({
    name : "Arjun Dutta",
    title : "Full-Stack Web Developer",
    location : "Seattle, WA",
    timeAsDeveloper : "2+ years",
    favoriteColor : "Blue. No! Yellow!"
});
 
function initPortfolio(dev) {
    // a brief overview about_me${linkIdentifier}>aboutme
    dev.renderSummary();
 
    // what a few nice people have
    // to_say${linkIdentifier}>testimonials
    dev.renderReviews();
 
    // a short list of some of what
    // I've worked_on${linkIdentifier}>projects
    dev.renderProjects();
    
    return;
}

initPortfolio(arjun);`;

export const parseText = (line) => {
  let content = [];
  
  let parts = line.split(linkIdentifier);
  
  return map(parts, (part, idx) => {
    // if odd return link, otherwise return span with text
    if (idx % 2) { 
      let linkParts = part.split('>');
      return {
        type    : 'link',
        content : <a key={idx} href={`#${linkParts[0]}`}>{linkParts[1]}</a>
      }; 
    } else {
      return {
        type    : 'text',
        content : <span key={idx}>{part}</span>
      };
    }
  });
};

export const skills = [
  {
    name : 'JavaScript',
    proficiency : 85,
    label : 'Advanced',
  },
  {
    name : 'React',
    proficiency : 90,
    label : 'Advanced'
  },
  {
    name : 'Redux',
    proficiency : 85,
    label : 'Advanced',
  },
  {
    name : 'HTML/CSS',
    proficiency : 83,
    label : 'Advanced',
  },
  {
    name : 'MySQL',
    proficiency : 80,
    label : 'Proficient',
  },
  {
    name : 'NodeJS',
    proficiency : 75,
    label : 'Proficient',
  },
];

export const skillLogos = [
  {
    name: 'JavaScript',
    file: 'javascript-plain.svg',
  },
  {
    name: 'ReactJS',
    file: 'react-original-wordmark.svg',
  },
  {
    name: 'Redux',
    file: 'redux.svg',
  },
  {
    name: 'NodeJS',
    file: 'nodejs-original-wordmark.svg',
  },
  {
    name: 'MySQL',
    file: 'mysql-plain-wordmark.svg',
  },
  {
    name: 'Sequelize',
    file: 'sequelize-original-wordmark.svg',
  },
  {
    name: 'jQuery',
    file: 'jquery-plain-wordmark.svg',
  },
  {
    name: 'HTML5',
    file: 'html5-plain-wordmark.svg',
  },
  {
    name: 'CSS3',
    file: 'css3-plain-wordmark.svg',
  },
  {
    name: 'Sass',
    file: 'sass-original.svg',
  },
  {
    name: 'Express',
    file: 'express-original-wordmark.svg',
  },
  {
    name: 'Github',
    file: 'github-original-wordmark.svg',
  },
  {
    name: 'NPM',
    file: 'npm-original-wordmark.svg',
  },
]

export const traits = [
  {
    name : 'Diligent',
    positive : true
  },
  {
    name : 'Enthusiastic',
    positive : true
  },
  {
    name : 'Collaborative',
    positive : true
  },
  {
    name : 'Friendly',
    positive : true
  },
  {
    name : 'Good Dancer',
    positive : false
  },
]

export const testimonials = [
  {
    text : `Arjun helped me build exactly the website I wanted. He's diligent, patient and thorough.`,
    from : (
      <div>
        Danny F. 
        <div>
          <i>Singer/Songwriter</i>
        </div>
      </div>
    )
  },
  {
    text: `
      Arjun is the rare devoted and creative professional who strives to continually learn and who thinks like an owner; he was a top-notch addition to our team.
    `,
    from : (
      <div>
        Doug C. 
        <div>
          <i>CEO, Foxtrot Systems</i>
        </div>
      </div>
    )
  },
];

export const menuData = (cb) => {

  return {
    animateDelay : 10,
    diameter     : 10,
    animateStyle : 'swing',
    items        : [
      {
        type    : 'img',
        src     : `${process.env.PUBLIC_URL}/img/projects.png`,
        popover : 'Projects',
        items   : [],
        onClick : () => { alert('In progress! Please check back soon.'); }
      },
      {
        type    : 'img',
        src     : `${process.env.PUBLIC_URL}/img/skills.png`,
        popover : 'About',
        items   : [],
        onClick : () => { window.location.href = '/about'; } // TODO - figure out how tf to do this with react-router
      },
      {
        type    : 'icon',
        icon    : 'fa fa-comment-o fa-3x',
        popover : 'Contact',
        items   : [],
        onClick : () => { alert('In progress! Please check back soon.'); }
      },
      {
        type    : 'icon',
        icon    : 'fa fa-ellipsis-h fa-3x',
        popover : 'Miscellaneous',
        items   : [
          {
            type    : 'text',
            text    : 'Goofy Pictures',
            items   : [],
            onClick : () => { alert('In progress! Please check back soon.'); }
          },
          {
            type    : 'text',
            text    : 'Favorite Things',
            items   : [],
            onClick : () => { alert('In progress! Please check back soon.'); }
          },
          {
            type    : 'text',
            text    : 'Placeholder',
            items   : [],
            onClick : () => { console.log('This is a placeholder - congratulations for finding this output! Call me to receive your prize!'); }
          }
        ]
      }
    ]
  }
};

export const transitionDuration = {
  short  : 100,
  medium : 500,
  long   : 1000
};

export const particlesConfig = {
  particles : {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 320.6824121731046
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.3367165327817598,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 96.20472365193136,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'bottom-right',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};