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
