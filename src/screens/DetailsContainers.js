import { getProduct, addToCart } from '../redux/actions';
import Detail from './Detail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    products: state.products.detail,
    isLoading: state.products.isLoading,
    isLoggedIn: state.account.isLoggedIn,
    user: state.account.user,
    token: state.account.access_token
})

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => dispatch(getProduct(id)),
    addToCart: (idProduct, price, id, authToken) => dispatch(addToCart(idProduct, price, id, authToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)