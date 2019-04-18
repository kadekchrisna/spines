import { getAll } from '../redux/actions';
import Products from './Products';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    products: state.products.products,
    isLoading: state.products.isLoading
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)