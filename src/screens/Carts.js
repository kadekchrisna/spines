import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, BackHandler } from 'react-native';
import { Container, View, Card } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Cart from '../redux/components/Cart';
import { stringToRupiah } from '../redux/helpers/Currency';


class Carts extends Component {

    componentDidMount() {
        this.props.navigation.addListener('didFocus', ()=> {
            this.props.getAllCart();
        })
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate('Home');
        return true;
    }
    onTextChanged(text, id){
        this.props.inputQty(id, text)
    }
    subNum(id, qty){
        this.props.decrementQty(id, qty);

    }
    addNum(id, qty){
        this.props.incrementQty(id, qty);

    }
    deleteItemCart(id){
        this.props.deleteItem(id);

    }

    render() {
        if (!this.props.carts) return (
            <Container>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text>There no product on your Cart</Text>
                </View>
            </Container>
        )
        else if (this.props.carts.length < 1)  return (
            <Container>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text>There no product on your Cart</Text>
                </View>
            </Container>
        )
        return (
            <Container>
                <View style={styles.container}>

                    <FlatList
                        data={this.props.carts}
                        renderItem={({ item }) =>
                            (
                                <Card >
                                    <View style={styles.cardList}>
                                        <View style={styles.cardBody}>
                                            <Cart

                                                name={item.name}
                                                uri={item.uri}
                                                price={stringToRupiah(String(item.price))}

                                            />
                                        </View>
                                        <View style={styles.cardFooter}>

                                            <View style={styles.quantity}>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <TouchableOpacity>
                                                        <FontAwesome name="minus" size={24} color='#f7c744' onPress={() => this.subNum(item.id, item.product_qty - 1)} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <TextInput
                                                        style={{ height: 50, width: 40, borderColor: '#f7c744', borderWidth: 1, textAlign: 'center', paddingBottom: 6 }}
                                                        onChangeText={(text) => this.onTextChanged(text, item.id)}
                                                        textAlignVertical={'center'}
                                                        textAlignHorizontal={'center'}
                                                        keyboardType={'numeric'}
                                                        defaultValue={String(item.product_qty)}
                                                    />
                                                </View>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <TouchableOpacity>
                                                        <FontAwesome name="plus" size={24} color='#f7c744' onPress={() => this.addNum(item.id, item.product_qty + 1)} />
                                                    </TouchableOpacity>

                                                </View>
                                                <View style={styles.quantity}>
                                                    <TouchableOpacity>
                                                        <FontAwesome name="trash" size={24} onPress={() => this.deleteItemCart(item.id)} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                </Card>
                            )
                        }
                        keyExtractor={item => String(item.id)}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.buttonAdd}>
                        <Text>Total :</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                            {stringToRupiah(String(this.props.total))}
                        </Text>
                    </View>
                    <View style={styles.buttonCheckOut}>
                        <TouchableOpacity
                            style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Checkout', {
                                total: this.props.total
                            })}
                        >
                            <Text style={styles.buttonText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container >
        );
    }
}

export default Carts

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
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderTopWidth: 0.2,
        borderTopColor: 'black',
        alignItems: 'stretch',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 4,
        marginBottom: 4
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
    cardHeader: {
        flex: 2,
    },
    cardFooter: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    cardDelete: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardBody: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    quantity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'center',

    },

    cardList: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    cardListEnd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardImage: {
        flex: 0.7
    },
    textMed: {
        fontSize: 20,
        fontWeight: 'bold',
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
    }
});

