import { register } from '../redux/actions';
import Account from './Account';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
    user: state.account.user

})

const mapDispatchToProps = dispatch => ({
    // register: (username, email, password) => dispatch(register(username, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)