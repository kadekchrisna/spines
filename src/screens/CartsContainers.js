import { getAllCart, incrementQty, decrementQty, inputQty, deleteItem } from '../redux/actions';
import Carts from './Carts';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    carts: state.products.carts,
    total: state.products.total,
    isLoading: state.products.isLoading,
    user: state.account.user,
    token: state.account.access_token,
    isLoggedIn: state.account.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
    getAllCart: (id, authToken) => dispatch(getAllCart(id, authToken)),
    incrementQty: (id, qty, authToken) => dispatch(incrementQty(id, qty, authToken)),
    decrementQty: (id, qty, authToken) => dispatch(decrementQty(id, qty, authToken)),
    inputQty: (id, text, authToken) => dispatch(inputQty(id, text, authToken)),
    deleteItem: (id, authToken) => dispatch(deleteItem(id, authToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(Carts)