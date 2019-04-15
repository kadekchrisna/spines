import { getProduct, addToCart } from '../redux/actions';
import Detail from './Detail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    products: state.products.products
})

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => dispatch(getProduct(id)),
    addToCart: (id, price) => dispatch(addToCart(id, price))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)