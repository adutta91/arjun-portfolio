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

export const OPEN_TERMINAL = 'OPEN_TERMINAL';
export const openTerminal = (val) => {
  Store.dispatch({
    type : OPEN_TERMINAL,
    val
  });
};

export const SET_MODAL = 'SET_MODAL';
export const setModal = (modal) => {
  Store.dispatch({
    type : SET_MODAL,
    modal
  });
};

export const SET_MOBILE = 'SET_MOBILE';
export const setMobile = (val) => {
  Store.dispatch({
    type : SET_MOBILE,
    val
  });
};

export const SKILLS_RECEIVED = 'SKILLS_RECEIVED';
export const skillsReceived = (skills) => {
  Store.dispatch({
    type : SKILLS_RECEIVED,
    skills
  });
};
