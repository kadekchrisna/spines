// Libs
import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, StatusBar, Dimensions, FlatList } from 'react-native';
import { Container, View, Header, Right, ListItem, Left, CardItem, Card, Body, List, Thumbnail } from 'native-base';
import { WaveIndicator } from 'react-native-indicators';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { stringToRupiah } from '../redux/helpers/Currency';
import { getMyValue } from '../redux/storage/AsyncStorage';


export default class History extends Component {

    static navigationOptions = {
        title: 'Purchase History'
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            this.getMyCheckout();
        })

    }
    async getMyCheckout() {
        const token = await getMyValue('token')
        if (token) {
            // console.log(token);
            const { id } = this.props.user
            // console.log(id);
            this.props.getCheckout(id);

        } else {
            const { type, token } = this.props.token
            const authToken = type + ' ' + token;
            const { id } = this.props.user
            this.props.getAllCart(id, authToken);
            // console.log(id, authToken);

        }

    }
    render() {
        if (this.props.isLoading === true) return (<WaveIndicator color="#009C71" size={60} />)
        else if (!this.props.checkout || this.props.checkout < 1) return (
            <Container>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text>There is no purchase history.</Text>
                </View>
            </Container>
        )
        return (
            <Container >
                <View style={styles.container}>
                    <StatusBar backgroundColor="#009C71" barStyle="light-content" />
                    <FlatList
                        data={this.props.checkout}
                        renderItem={({ item }) =>
                            (
                                <Card>
                                    <CardItem header>
                                        <View>
                                            <Text>Transaction Date: {item.created_at}</Text>
                                        </View>
                                    </CardItem>
                                    <View style={styles.hrLine}></View>
                                    <List>
                                        <FlatList
                                            data={item.products}
                                            renderItem={({ item }) =>
                                                (
                                                    <ListItem thumbnail>
                                                        <Left>
                                                            <Thumbnail square source={{ uri: item.uri }} />
                                                        </Left>
                                                        <Body>
                                                            <Text >{item.name}</Text>
                                                            <Text style={{ fontSize: 12, }}>Quantity: {String(item.quantity)}</Text>
                                                            <Text style={{ fontSize: 12, }}>Weight: {String(item.weight)} g</Text>
                                                        </Body>
                                                    </ListItem>

                                                )
                                            }
                                            keyExtractor={item => item.id.toString()}

                                        />
                                    </List>

                                    <CardItem footer>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>Total Price: {stringToRupiah(String(item.bill))}</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'stretch',
    },
    containerEmpty: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'stretch',
    },
    card: {
        flex: 1,
        width: (Dimensions.get('window').width) / 2,

    },

    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 16,
        marginRight: 22

    },
    cardBody: {
        paddingBottom: 4,
    },
    cardHeader: {
        paddingBottom: 0,
        marginTop: 2
    },
    textMed: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    textPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red'
    },
    imageCard: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'stretch',
        width: 240,
        height: 240,
        resizeMode: 'contain'

    },
    header: {
        backgroundColor: 'white'
    },
    titleHeader: {
        color: '#009C71',
        paddingLeft: 6,
    },
    iconCart: { marginLeft: 8, marginRight: 8 },
    itemName: { color: '#009C71', fontSize: 12 }
});