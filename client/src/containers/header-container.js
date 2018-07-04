import { connect } from 'react-redux';
import _ from 'lodash';

import Header from '../components/header.jsx';

const mapStateToProps = (state, props) => {
    return {
        scrolled : state.scrolled,
        show : state.showHeader,
        theme : state.theme,
    };
};

export default connect(mapStateToProps)(Header);
