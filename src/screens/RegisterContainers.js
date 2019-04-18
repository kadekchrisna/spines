import { register } from '../redux/actions';
import Register from './Register';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    register: (username, email, password) => dispatch(register(username, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
