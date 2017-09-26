export const menuData = {
  animateDelay : 10,
  diameter     : 10,
  animateStyle : 'radiate',
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
      popover : 'Skills',
      items   : [],
      onClick : () => { alert('In progress! Please check back soon.'); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-graduation-cap fa-3x',
      popover : 'Experience',
      items   : [],
      onClick : () => { alert('In progress! Please check back soon.'); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-comment-o fa-3x',
      popover : 'Contact Me',
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
};

export const transitionDuration = {
  short  : 100,
  medium : 500,
  long   : 1000
};
