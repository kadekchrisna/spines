import { getCheckout } from '../redux/actions';
import History from './History';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    checkout: state.checkout.checkout,
    isLoading: state.checkout.isLoading,
    user: state.account.user,
})

const mapDispatchToProps = dispatch => ({
    getCheckout: (id) => dispatch(getCheckout(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(History)