const initial = {
    user: {},
    access_token: {},
    isLoggedIn: false
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'REGISTER_USER_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                user: action.payload.data.user,
                access_token: action.payload.data.access_token,
                isLoggedIn: true
            }
        case 'LOGIN_USER_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                user: action.payload.data.user,
                access_token: action.payload.data.access_token,
                isLoggedIn: true
            }
        default:
            return state;

    }
}
