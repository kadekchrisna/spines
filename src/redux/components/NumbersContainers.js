import { increment, decrement } from '../actions';
import Numbers from './Numbers';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    numbers: state.numbers.numbers
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Numbers)