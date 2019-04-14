const initial = {
    numbers: 0
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                numbers: state.numbers+1
            }

        case 'DECREMENT':
            return {
                numbers: state.numbers-1
            }

        default:
        return state;
            
    }
}
