import { connect } from 'react-redux';

import App from '../components/app.jsx';

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(App);
