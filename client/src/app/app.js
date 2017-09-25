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
      onClick : () => { console.log(2); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-user-plus fa-3x',
      popover : 'Skills',
      items   : [],
      onClick : () => { console.log(2); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-road fa-3x',
      popover : 'Experience',
      items   : [],
      onClick : () => { console.log(1); }
    },
    {
      type    : 'icon',
      icon    : 'fa fa-comment-o fa-3x',
      popover : 'Contact Me',
      items   : [],
      onClick : () => { console.log(1); }
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
          onClick : () => { console.log(1); }
        },
        {
          type    : 'text',
          text    : 'Favorite Things',
          items   : [],
          onClick : () => { console.log(2); }
        },
        {
          type    : 'text',
          text    : 'Placeholder',
          items   : [],
          onClick : () => { console.log('This is a placeholder - congratulations for finding this output! Call me to receive your prize!'); }
        }
      ],
      onClick : () => { console.log(3); }
    }
  ]
};

export const transitionDuration = {
  short  : 100,
  medium : 500,
  long   : 1000
};
