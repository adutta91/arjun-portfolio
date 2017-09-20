import { createStore } from 'redux';

import {
  SITE_ENTERED
} from './actions';

const initialState = {
  entered : false
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SITE_ENTERED: return { ...state, entered : true };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
