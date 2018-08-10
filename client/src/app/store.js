import { createStore } from 'redux';

import {
  SET_SCROLL,
  TOGGLE_HEADER,
  SHOW_FOOTER,
  TOGGLE_THEME,
  SET_MOBILE,
  SKILLS_RECEIVED,
} from './actions';

const initialState = {
  scrolled : false,
  showHeader : true,
  showFooter : false,
  theme : 'light',
  isMobile : false,
  skills : [],
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SCROLL: return { ...state, scrolled : action.val };
    case TOGGLE_HEADER: return { ...state, showHeader : action.val };
    case SHOW_FOOTER: return { ...state, showFooter : action.val };
    case TOGGLE_THEME: return { ...state, theme : action.theme };
    case SET_MOBILE: return { ...state, isMobile : action.val };
    case SKILLS_RECEIVED: return { ...state, skills : action.skills };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
