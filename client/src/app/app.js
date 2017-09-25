export const menuData = {
  animateDelay : 10,
  diameter     : 10,
  animateStyle : 'swing',
  items        : [
    {
      type    : 'icon',
      icon    : 'fa fa-wrench fa-3x',
      popover : 'Projects',
      items   : [],
      onClick : () => { alert('In progress! Please check back soon.'); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-user-plus fa-3x',
      popover : 'Skills',
      items   : [],
      onClick : () => { alert('In progress! Please check back soon.'); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-road fa-3x',
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
      ],
      onClick : () => { alert('In progress! Please check back soon.'); }
    }
  ]
};

export const transitionDuration = {
  short  : 100,
  medium : 500,
  long   : 1000
};
