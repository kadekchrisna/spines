// Libs
import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, StatusBar, Dimensions, FlatList } from 'react-native';
import { Container, View, Header, Right, Title, Left, CardItem, Card, Body } from 'native-base';
import { WaveIndicator } from 'react-native-indicators';

import { stringToRupiah } from '../redux/helpers/Currency';
import { getMyValue } from '../redux/storage/AsyncStorage';


export default class Products extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', ''),
        };
    };

    async componentDidMount() {
        const token = await getMyValue('token')
        console.log(token);

        this.props.navigation.addListener('didFocus', () => {
            const id = this.props.navigation.getParam('id', '');
            this.props.getProductByCat(id);
        })


    }

    
    onPress = (id) => {
        this.props.navigation.navigate('Detail', {
            id: id
        });
    }
    render() {
        if (this.props.isLoading === true) return (<WaveIndicator color="#009C71" size={60} />)
        // console.log(this.props.products);
        return (
            <Container >
                {/* <Header style={styles.header} >
                    <Left>
                        <Title style={styles.titleHeader}>S P I N E ' S</Title>
                    </Left>
                    <Right>
                        <TouchableOpacity style={styles.iconCart} onPress={() => alert('search')}>
                            <FontAwesome name="search" size={24} color='#009C71' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('Cart')}>
                            <FontAwesome name="shopping-cart" size={24} color='#009C71' />
                        </TouchableOpacity>
                    </Right>
                </Header> */}
                <View style={styles.container}>
                    <StatusBar backgroundColor="#009C71" barStyle="light-content" />
                    <FlatList
                        data={this.props.productsCat}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) =>
                            (
                                <Card style={styles.card}>
                                    <TouchableOpacity onPress={() => this.onPress(item.id)}>
                                        <View >
                                            <CardItem>
                                                <Image source={{ uri: item.uri }} style={styles.imageCard} />
                                            </CardItem>

                                            <CardItem style={styles.cardHeader}>
                                                <Text style={styles.textMed}>{item.name}</Text>
                                            </CardItem>
                                            <View style={styles.hrLine} />
                                            <CardItem>
                                                <Body style={styles.cardBody}>
                                                    <Text style={styles.textPrice}>
                                                        {stringToRupiah(String(item.price))}
                                                    </Text>
                                                </Body>
                                            </CardItem>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                            )
                        }
                        keyExtractor={item => item.id}
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
        backgroundColor: '#F2F1F1',
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
