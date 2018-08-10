import { connect } from 'react-redux';

import AboutMe from '../components/aboutme';

const mapStateToProps = (state, props) => {
    return {
        theme: state.theme,
        skills: state.skills,
        pos: props.pos
    };
};

export default connect(mapStateToProps)(AboutMe);
