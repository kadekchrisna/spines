import { getAll, getAllCategories } from '../redux/actions';
import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    products: state.products.products,
    isLoading: state.products.isLoading,
    category: state.category.categories
})

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(getAll()),
    getAllCategories: () => dispatch(getAllCategories())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)