export const menuData = {
  animateDelay : 10,
  diameter     : 10,
  animateStyle : 'swing',
  items        : [
    {
      type  : 'icon',
      icon  : 'fa fa-user-circle-o fa-3x',
      items : [
        {
          type    : 'text',
          text    : '1',
          items   : [],
          onClick : () => { console.log(4); }
        },
        {
          type    : 'text',
          text    : '2',
          items   : [],
          onClick : () => { console.log(5); }
        },
        {
          type    : 'text',
          text    : '3',
          items   : [],
          onClick : () => { console.log(6); }
        },
        {
          type    : 'text',
          text    : '4',
          items   : [],
          onClick : () => { console.log(7); }
        }
      ],
      onClick : () => { console.log(1); }
    },
    {
      type  : 'icon',
      icon  : 'fa fa-at fa-3x',
      items : [],
      onClick : () => { console.log(2); }
    },
    {
      type  : 'icon',
      icon  : 'fa fa-paper-plane-o fa-3x',
      items : [],
      onClick : () => { console.log(3); }
    }
  ]
  // items        : [
  //   {
  //     type    : 'icon',
  //     icon    : 'fa fa-user-circle-o fa-3x',
  //     items   : [],
  //     onClick : () => { console.log(1); }
  //   },
  //   {
  //     type    : 'icon',
  //     icon    : 'fa fa-at fa-3x',
  //     items   : [],
  //     onClick : () => { console.log(2); }
  //   },
  //   {
  //     type    : 'icon',
  //     icon    : 'fa fa-paper-plane-o fa-3x',
  //     items   : [],
  //     onClick : () => { console.log(3); }
  //   }
  // ]
};

export const transitionDuration = {
  short  : 100,
  medium : 500,
  long   : 1000
};
