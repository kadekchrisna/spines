import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Cart extends Component {
    render(){
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Checkout')}>
                <View>
                    <Text>Checkout</Text>
                </View>
            </TouchableOpacity>

        );
    }
}
export default Cart
