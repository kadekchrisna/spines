
import React, { Component } from 'react';
import { Text, StyleSheet, Image, Alert, Button, Picker, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Container, Content, Body, Card, CardItem, View } from 'native-base';
import Modal from "react-native-modal";

import { stringToRupiah } from '../redux/helpers/Currency';

export default class Checkout extends Component {

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        title: 'Checkout',
    };
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            myNumber: 1,
            poke: [],
            address: '',
            courier: '30000',
            total: '0'
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const total = navigation.getParam('total', '');
        this.setState({ total });
    }
    totalPrice = () => {
        const total = Number(this.state.total) + Number(this.state.courier);

        return stringToRupiah(total.toString());
    }
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {

        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <Content>
                            <Card >
                                <View style={styles.cardAddress}>
                                    <CardItem>
                                        <Text>Address :  </Text>
                                        <View
                                            style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'stretch'
                                            }}
                                        >
                                            <Text>{this.state.address}</Text>
                                        </View>
                                    </CardItem>
                                    <View>

                                        <Button
                                            block
                                            color="#009C71"
                                            title="+"
                                            onPress={this._toggleModal}
                                        />
                                    </View>

                                </View>
                            </Card>

                            <Card style={styles.containerCard}>
                                <CardItem style={{ marginHorizontal: 24 }}>
                                    <View>
                                        <Text>Courier : </Text>
                                    </View>

                                    <Picker
                                        selectedValue={this.state.language}
                                        style={{ height: '100%', width: '100%' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ courier: itemValue })
                                        }
                                        selectedValue={this.state.courier}
                                    >
                                        <Picker.Item label="JNE YES" value="30000" />
                                        <Picker.Item label="JNE REG" value="20000" />
                                    </Picker>
                                </CardItem>
                            </Card>

                            <Card style={styles.containerCard}>
                                <CardItem>
                                    <Text>Total Price :</Text>
                                </CardItem>
                                <CardItem style={styles.textSum}>
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {stringToRupiah(this.state.total.toString())}
                                    </Text>
                                </CardItem>
                            </Card>

                            <Card style={styles.containerCard}>
                                <CardItem>
                                    <Text>Courier Cost :</Text>
                                </CardItem>
                                <CardItem style={styles.textSum}>
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {stringToRupiah(this.state.courier.toString())}
                                    </Text>
                                </CardItem>
                            </Card>
                            <Card style={styles.containerCard}>
                                <CardItem>
                                    <Text>Total Bill :</Text>
                                </CardItem>
                                <CardItem style={styles.textSum}>
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {this.totalPrice()}
                                    </Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Checkout')}>
                            <Text style={styles.buttonText}>Pay</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Modal isVisible={this.state.isModalVisible} >
                            <View style={styles.containerModal}>
                                <Text>Address: </Text>
                                <TextInput
                                    style={styles.inputAddress}
                                    multiline
                                    numberOfLines={10}
                                    onChangeText={(address) => this.setState({ address })}
                                    value={this.state.address}
                                />
                            </View>
                            <View style={styles.footer}>
                                <TouchableOpacity style={styles.buttonContainerModal} onPress={this._toggleModal}>
                                    <Text style={styles.buttonText}>Add Address</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                </View>
            </Container >
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
    containerCard: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    cardAddress: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    containerInput: {
        flex: 1,

    },
    textSum: {
        flex: 1,
        justifyContent: 'flex-end',

    },

    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
    body: {
        flex: 4
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
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7c744',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    containerModal: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 16,

    },
    buttonContainerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009C71',
        paddingVertical: 16,
        borderRadius: 6,
    },
    inputAddress: {
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 6,
    }
});
