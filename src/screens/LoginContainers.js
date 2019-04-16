import { loginUser } from '../redux/actions';
import Login from './Login';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    loginUser: (email, password) => dispatch(loginUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)