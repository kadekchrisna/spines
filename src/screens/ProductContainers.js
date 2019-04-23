import { getAll, getProductByCat } from '../redux/actions';
import Products from './Products';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    productsCat: state.category.productsCat,
    isLoading: state.products.isLoading
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(getAll()),
    getProductByCat: (id) => dispatch(getProductByCat(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)