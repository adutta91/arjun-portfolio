import { connect } from 'react-redux';
import _ from 'lodash';

import App from '../components/app.jsx';

const mapStateToProps = (state, props) => {
  return _.extend(state, {
    page : props.match.params.page || 'index',
    scrolled : state.scrolled
  });
};

export default connect(mapStateToProps)(App);
