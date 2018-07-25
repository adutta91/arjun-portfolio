import Store from './store';


export const SET_SCROLL = 'SET_SCROLL';
export const setScrolled = (val) => {
  Store.dispatch({
    type : SET_SCROLL,
    val
  });
};

export const TOGGLE_HEADER = 'TOGGLE_HEADER';
export const toggleHeader = (val) => {
  Store.dispatch({
    type : TOGGLE_HEADER,
    val
  });
};

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const toggleTheme = (theme) => {
  Store.dispatch({
    type : TOGGLE_THEME,
    theme
  });
};

export const SHOW_FOOTER = 'SHOW_FOOTER';
export const showFooter = (val) => {
  Store.dispatch({
    type : SHOW_FOOTER,
    val
  });
};

export const SET_MOBILE = 'SET_MOBILE';
export const setMobile = (val) => {
  Store.dispatch({
    type : SET_MOBILE,
    val
  });
};
