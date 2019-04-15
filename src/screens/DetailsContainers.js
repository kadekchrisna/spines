import { getProduct } from '../redux/actions';
import Detail from './Detail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    products: state.products.products
})

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => dispatch(getProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)