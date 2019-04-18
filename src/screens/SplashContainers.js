import { clearUser, getUserData } from '../redux/actions';
import Splash from './Splash';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    getUserData: (token) => dispatch(getUserData(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
