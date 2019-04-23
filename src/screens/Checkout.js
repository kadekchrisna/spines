
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Container, Card, List, ListItem, Thumbnail, Text, Left, Body, Right, Content, Form, Item, Input, Label, Textarea, CardItem, View, Picker } from 'native-base';

import { stringToRupiah } from '../redux/helpers/Currency';
import { getMyValue } from '../redux/storage/AsyncStorage';

export default class Checkout extends Component {

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        title: 'Checkout',
    };
    constructor(props) {
        super(props);
        this.state = {
            address: 'Near some big tree',
            province: 'Jakarta',
            city: 'Tanggerang',
            courier: '30000',
            name: '',
            phone: '082275628612',
            id: '',
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            this.getMyCart()
        })
    }
    async getMyCart() {
        const token = await getMyValue('token')
        if (token) {
            // console.log(token);
            const { id, username } = this.props.user
            this.setState({ name: username, id: id })
            // console.log(id);
            this.props.getAllCart(id, token);

        } else {
            const { type, token } = this.props.token
            const authToken = type + ' ' + token;
            const { id } = this.props.user
            this.props.getAllCart(id, authToken);
            // console.log(id, authToken);

        }

    }
    totalPrice = () => {
        const total = this.props.total + this.totalCourier();

        return total
    }

    totalCourier = () => {
        return total = Number(this.state.courier) * (this.props.weight / 1000)
    }
    toCheckout = (id, province, city, address, phone, courier, bill) => {
        if (this.state.province == '' || this.state.city == '' || this.state.address == '' || this.state.phone == '' || this.state.name == '') {
            return Alert.alert(
                'Check',
                'Please check the address form!',
                [
                    { text: 'OK'},
                ],
                { cancelable: false },
            );
        }else {
            // alert(bill + ' ' + Number(this.totalPrice()))
            this.props.addToCheckout(id, province, city, address, phone, courier, bill)
            if (this.props.isLoading !== true) {
                this.props.navigation.navigate('Home')
            }
            
            
        }
    }
    render() {

        return (
            <Container>
                <Content style={{ backgroundColor: '#F2F1F1' }}>
                    <View style={styles.containerAddress}>
                        <Card>
                            <CardItem header>
                                <Text>Address Form</Text>
                            </CardItem>
                            <View style={styles.hrLine}></View>
                            <Form >
                                <Item stackedLabel>
                                    <Label>Name</Label>
                                    <Input onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Phone Number</Label>
                                    <Input keyboardType={"number-pad"} onChangeText={(text) => this.setState({ phone: text })} value={this.state.phone} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Province</Label>
                                    <Input onChangeText={(text) => this.setState({ province: text })} value={this.state.province}  />
                                </Item>
                                <Item stackedLabel>
                                    <Label>City</Label>
                                    <Input onChangeText={(text) => this.setState({ city: text })} value={this.state.city} />
                                </Item>
                                <Textarea rowSpan={5} bordered placeholder="Full Address" onChangeText={(text) => this.setState({ address: text })} value={this.state.address} />
                            </Form>
                        </Card>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 8, }}>
                        <Card>
                            <CardItem header>
                                <Text>Courier</Text>
                            </CardItem>
                            <View style={styles.hrLine}></View>
                            <CardItem>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.courier}
                                    onValueChange={(itemValue) =>
                                        this.setState({ courier: itemValue })
                                    }
                                    selectedValue={this.state.courier}
                                >
                                    <Picker.Item label="JNE YES" value="30000" />
                                    <Picker.Item label="JNE REG" value="20000" />
                                </Picker>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 8, }}>
                        <Card>
                            <CardItem header>
                                <Text>List Product</Text>
                            </CardItem>
                            <View style={styles.hrLine}></View>
                            <List>
                                <FlatList
                                    data={this.props.carts}
                                    renderItem={({ item }) =>
                                        (
                                            <ListItem thumbnail>
                                                <Left>
                                                    <Thumbnail square source={{ uri: item.uri }} />
                                                </Left>
                                                <Body>
                                                    <Text >{item.name}</Text>
                                                    <Text style={{ fontSize: 12, }}>Quantity: {item.quantity}</Text>
                                                    <Text style={{ fontSize: 12, }}>Weight: {item.weight} g</Text>
                                                </Body>
                                            </ListItem>

                                        )
                                    }
                                    keyExtractor={item => String(item.id)}

                                />
                            </List>
                        </Card>
                        <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 8, }}>
                            <Card style={styles.containerSum}>
                                <CardItem header>
                                    <Text>Bill</Text>
                                </CardItem>
                                <View style={styles.hrLine}></View>
                                <CardItem>
                                    <Text>Total Price : </Text>
                                </CardItem>
                                <CardItem style={styles.textSum}>
                                    <Text>{stringToRupiah(String(this.props.total))}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text>Courier Cost : </Text>
                                </CardItem>
                                <CardItem style={styles.textSum}>
                                    <Text>{stringToRupiah(String(this.totalCourier()))}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text>Total Bill : </Text>
                                </CardItem>
                                <CardItem style={styles.textSum}>
                                    <Text style={styles.textSumStyle}>{stringToRupiah(String(this.totalPrice()))}</Text>
                                </CardItem>
                            </Card>
                        </View>

                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.buttonContainerModal} onPress={() => this.toCheckout(this.state.id, this.state.province, this.state.city, this.state.address, this.state.phone, this.state.courier, Number(this.totalPrice()))}>
                                <Text style={styles.buttonText}>Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    containerAddress: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    containerCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'stretch',
    },
    containerSum: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'stretch',
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
    textSumStyle: {
        fontWeight: 'bold',
        fontSize: 22,
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
