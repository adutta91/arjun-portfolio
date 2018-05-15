import { createStore } from 'redux';

import {
  SET_SCROLL,
  TOGGLE_HEADER
} from './actions';

const initialState = {
  scrolled : false,
  showHeader : true
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SCROLL: return { ...state, scrolled : action.val };
    case TOGGLE_HEADER: return { ...state, showHeader : action.val };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
