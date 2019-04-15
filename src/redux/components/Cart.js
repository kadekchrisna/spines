
import React, { Component } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { CardItem, View } from 'native-base';

export default class Cart extends Component {
    render() {
        return (

            <View style={styles.cardList}>
                <CardItem style={styles.cardImage}>
                    <Image source={{ uri: this.props.uri }} style={styles.imageCard} />
                </CardItem>
                <CardItem style={styles.cardHeader}>
                    <View>
                        <Text style={styles.textMed}>{this.props.name}</Text>
                        <Text>{this.props.price} </Text>
                    </View>
                </CardItem>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'stretch',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
    cardHeader: {
        flex: 2,
    },
    cardListEnd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardImage: {
        flex: 0.7,
    },
    textMed: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardList: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    imageCard: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'

    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    buttonAdd: {
        flex: 2,
        paddingBottom: 2,
        paddingLeft: 4

    },
    buttonCheckOut: {
        flex: 1,
        borderRadius: 30,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignItems: 'stretch',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 4
    },
});
