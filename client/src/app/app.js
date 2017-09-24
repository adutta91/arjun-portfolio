export const menuData = {
  animateDelay : 10,
  diameter     : 10,
  animateStyle : 'radiate',
  items        : [
    {
      type    : 'icon',
      faIcon  : 'fa fa-user-circle-o fa-3x',
      items   : [],
      onClick : () => { console.log(1); }
    },
    {
      type    : 'icon',
      faIcon  : 'fa fa-at fa-3x',
      items   : [],
      onClick : () => { console.log(2); }
    },
    {
      type    : 'icon',
      faIcon  : 'fa fa-paper-plane-o fa-3x',
      items   : [],
      onClick : () => { console.log(3); }
    }
  ]
};

export const transitionDuration = {
  short  : 100,
  medium : 500,
  long   : 1000
};
