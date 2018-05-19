import { createStore } from 'redux';

import {
  SET_SCROLL,
  TOGGLE_HEADER,
  SHOW_FOOTER
} from './actions';

const initialState = {
  scrolled : false,
  showHeader : true,
  showFooter : false
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SCROLL: return { ...state, scrolled : action.val };
    case TOGGLE_HEADER: return { ...state, showHeader : action.val };
    case SHOW_FOOTER: return { ...state, showFooter : action.val };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
