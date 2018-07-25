import { connect } from 'react-redux';

import Landing from '../components/landing.jsx';

const mapStateToProps = (state, props) => {
    return {
        isMobile: state.isMobile,
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Landing);
