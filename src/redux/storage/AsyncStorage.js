import AsyncStorage from '@react-native-community/async-storage';

export const setValue = async (key, val) => {
    try {
        await AsyncStorage.setItem(key, val)
    } catch (e) {
        // save error
    }

    console.log('Done Set Value Async')
}

export const getMyValue = (key) => {

    return AsyncStorage.getItem(key)
        .then((val) => {
            return JSON.parse(val)
        }).catch((e) => {
            console.log('error get')
        })

    console.log('Done Get Value Async')

}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (e) {
        return false
        // remove error
    }

    console.log('Done Remove Value Async')
}