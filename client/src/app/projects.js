import React from 'react';
import MenuDemo from '../components/demos/revolver-menu.jsx'
// items: PropTypes.arrayOf(PropTypes.shape({
//     type: PropTypes.oneOf(['img', 'icon', 'text']).isRequired,
//     text: PropTypes.string,
//     src: PropTypes.string,
//     icon: PropTypes.string,
//     popover: PropTypes.string,
//     popoverPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
//     items: PropTypes.arrayOf(PropTypes.object),
//     onClick: PropTypes.func,
//     className: PropTypes.string
// })).isRequired,
//     diameter     : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//         animateDelay : PropTypes.number,
//             animateStyle : PropTypes.oneOf(['radiate', 'swing']),
//                 border       : PropTypes.oneOf(['dashed', 'solid', 'none'])
const revolverMenuProps = {
    diameter : 10,
    animateDelay : 10,
    animateStyle : 'radiate',
    border : 'none',
    items : [
        {
            type : 'text',
            text : 'Hallo',
            items : [
                {
                    type : 'text',
                    text : 'Woah'
                },
                {
                    type : 'text',
                    text : 'This'
                },
                {
                    type : 'text',
                    text : 'Is'
                },
                {
                    type : 'text',
                    text : 'Pretty'
                },
                {
                    type : 'text',
                    text : 'Cool'
                },
            ]
        },
        {
            type : 'text',
            text : 'There',
            items: [
                {
                    type: 'text',
                    text: 'Let\'s'
                },
                {
                    type: 'text',
                    text: 'Go'
                },
                {
                    type: 'text',
                    text: 'Skiing'
                },
            ]
        },
        {
            type : 'text',
            text : 'Friend',
            items: [
                {
                    type: 'text',
                    text: 'How'
                },
                {
                    type: 'text',
                    text: 'Are'
                },
                {
                    type: 'text',
                    text: 'You'
                },
                {
                    type: 'text',
                    text: 'Doing?'
                },
            ]
        },
    ]
};

export const projects = [
    {
        title: 'React Revolver Menu',
        skills: ['ReactJS', 'JavaScript', 'HTML/CSS', 'NPM'],
        link: 'https://github.com/adutta91/react-revolver-menu',
        component: <MenuDemo {...revolverMenuProps} />,
        description: `
            A circular menu I built using React that is available as an NPM module. The idea is an arbitrarily deep menu arranged in a circle, with option to go back to the higher level in the menu through a button in the center. I had a lot of fun figuring out the challenge of making it as dynamic as possible - allowing for any number
            of items while still being symmetrically displayed, as well as giving the implementor options for types of menu items (icon, image or text), as well as a couple different animations. 
        `,
        sampleCode: `
            /*
                The following are method definitions on the ReactRevolverMenu react component class.
                Specifically, these deal with rendering the menu items to display. The challenge in
                this part of the component was managing the history of the menu's interactions such
                that the previous set of items could be displayed again by clicking the back button.
                Additionally, these functions render different items based on the specified type of
                the menu item, as well as add specific inline styles depending on the user's choice
                of enumerable menu animation styles.
            */
            
            
            renderItems() {
                let items = this.props.items;
                if (this.state.subItems.length) items = this.state.subItems;
                
                return _.map(items, (item, idx) => {
                    return this.renderItem(item, idx);
                });
            }
            
            renderItem(item, idx) {
                let interval = parseInt(360 / this.props.items.length);
                
                if (this.state.subItems.length) interval = parseInt(360 / this.state.subItems.length)
                
                const style = this.getStyle(item, interval, idx);
                
                const props = {
                    key          : idx,
                    className    : \`menu - item \${ item.className || '' } \${ this.state.showStyle[idx] ? 'show' : '' }\`,
                    onClick      : this.itemClick.bind(this, item, idx),
                    style        : style,
                    onMouseOver  : this.setOnHover.bind(this, idx, true),
                    onMouseLeave : this.setOnHover.bind(this, idx, false)
                };

                return this.itemSwitchBoard(item, props, idx);
            }
            
            itemSwitchBoard(item, props, idx) {
                let popover = this.renderPopover(item, idx);
                
                switch(item.type) {
                    case 'img':
                        return <div {...props} ><img src={item.src} />{popover}</div>;
                    case 'text':
                        return <div {...props}>{item.text}{popover}</div>;
                    case 'icon':
                        return <div {...props}><i className={item.icon} />{popover}</div>;
                }
            }
        `
    },
];
