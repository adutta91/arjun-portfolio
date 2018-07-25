import { connect } from 'react-redux';

import Projects from '../components/projects.jsx';

const mapStateToProps = (state, props) => {
    return {
        isMobile: state.isMobile,
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Projects);
