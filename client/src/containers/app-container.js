import { connect } from 'react-redux';
import _ from 'lodash';

import App from '../components/app.jsx';

const mapStateToProps = (state, props) => {
  return _.extend(state, {
    scrolled : state.scrolled,
    showFooter : state.showFooter,
    theme : state.theme,
    isMobile : state.isMobile,
  });
};

export default connect(mapStateToProps)(App);
