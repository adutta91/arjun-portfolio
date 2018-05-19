import { connect } from 'react-redux';
import _ from 'lodash';

import Footer from '../components/footer.jsx';

const mapStateToProps = (state, props) => {
    return {
        showFooter: state.showFooter,
    };
};

export default connect(mapStateToProps)(Footer);
