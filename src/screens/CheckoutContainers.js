import { getAllCart, addToCheckout } from '../redux/actions';
import Checkout from './Checkout';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    carts: state.products.carts,
    total: state.products.total,
    isLoading: state.checkout.isLoading,
    user: state.account.user,
    weight: state.products.weight
})

const mapDispatchToProps = dispatch => ({
    getAllCart: (id, authToken) => dispatch(getAllCart(id, authToken)),
    addToCheckout: (id, province, city, address, phone, courier, bill) => dispatch(addToCheckout(id, province, city, address, phone, courier, bill)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)