import { registerUser } from '../redux/actions';
import Register from './Register';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    registerUser: (username, email, password) => dispatch(registerUser(username, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
