import { createStore } from 'redux';

import {
  SET_SCROLL,
  TOGGLE_HEADER,
  SHOW_FOOTER,
  TOGGLE_THEME,
} from './actions';

const initialState = {
  scrolled : false,
  showHeader : true,
  showFooter : false,
  theme : 'light'
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SCROLL: return { ...state, scrolled : action.val };
    case TOGGLE_HEADER: return { ...state, showHeader : action.val };
    case SHOW_FOOTER: return { ...state, showFooter : action.val };
    case TOGGLE_THEME: return { ...state, theme : action.theme };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
