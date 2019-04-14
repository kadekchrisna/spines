
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



class Numbers extends Component {
    componentDidMount() {
        this.props.increment()
        console.log(this.props.numbers);
    
    }
    
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.decrement()}>
                    <Text style={styles.welcome}>Incement</Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>{this.props.numbers}</Text>
                <TouchableOpacity onPress={() => this.props.increment()}>
                    <Text style={styles.welcome}>Decrement</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Numbers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
