import { getAll } from '../actions';
import Products from './Products';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    products: state.products.products
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)