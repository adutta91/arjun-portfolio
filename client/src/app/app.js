
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