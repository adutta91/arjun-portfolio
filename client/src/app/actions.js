import Store from './store';

export const SITE_ENTERED = 'SITE_ENTERED';

export const siteEntered = () => {
  Store.dispatch({
    type : SITE_ENTERED
  });
};
