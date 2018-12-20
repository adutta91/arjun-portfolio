import { connect } from 'react-redux';

import Terminal from '../components/terminal';

const mapStateToProps = (state, props) => {
    return {
        show: state.showTerminal
    };
};

export default connect(mapStateToProps)(Terminal);
