import { getAllCart, incrementQty, decrementQty, inputQty, deleteItem } from '../redux/actions';
import Carts from './Carts';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    carts: state.products.carts,
    total: state.products.total
})

const mapDispatchToProps = dispatch => ({
    getAllCart: () => dispatch(getAllCart()),
    incrementQty: (id, qty) => dispatch(incrementQty(id, qty)),
    decrementQty: (id, qty) => dispatch(decrementQty(id, qty)),
    inputQty: (id, text) => dispatch(inputQty(id, text)),
    deleteItem: (id) => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Carts)