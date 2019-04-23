
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native';
import { Container, View, Content, Header, Left, Right, Title, Thumbnail, Card, CardItem, Body } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WaveIndicator } from 'react-native-indicators';
import Swiper from 'react-native-swiper';

import { stringToRupiah } from '../redux/helpers/Currency';


export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            this.props.getAll();
            this.props.getAllCategories();
        })


    }
    productsList = (id, name) => {
        this.props.navigation.navigate('Product', {
            id,
            name
        });

    }
    onPress = (id) => {
        this.props.navigation.navigate('Detail', {
            id: id
        });
    }
    render() {
        // console.log(this.props.category);
        if (this.props.isLoading === true) return (<WaveIndicator color="#009C71" size={60} />)

        return (
            <Container>
                <Content>
                    <Header style={styles.header} >
                        <Left>
                            <Title style={styles.titleHeader}>S P I N E ' S</Title>
                        </Left>
                        <Right>
                            {/* <TouchableOpacity style={styles.iconCart} onPress={() => alert('search')}>
                                <FontAwesome name="search" size={24} color='#009C71' />
                            </TouchableOpacity> */}
                            <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('Cart')}>
                                <FontAwesome name="shopping-cart" size={24} color='#009C71' />
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <StatusBar backgroundColor="#009C71" barStyle="light-content" />

                    <Swiper style={styles.wrapper} autoplay={true}>
                        <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0029/3981/3988/files/5_1b41ef02-ad45-4821-afb9-10145ea02812_1920x800.jpg' }} style={styles.imageSlide} />
                        <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0029/3981/3988/files/2_37ce2241-60b3-4173-9b41-584abcabb062_1920x800.jpg' }} style={styles.imageSlide} />
                        <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0029/3981/3988/files/6_1920x800.jpg' }} style={styles.imageSlide} />
                    </Swiper>
                    <View style={styles.container}>
                        <View style={styles.category}>
                            <Text style={{ paddingTop: 4, paddingBottom: 8, fontSize: 20, color: '#009C71' }}>Category</Text>
                            <FlatList
                                data={this.props.category}
                                horizontal={false}
                                numColumns={4}
                                renderItem={({ item }) =>
                                    (
                                        <TouchableOpacity style={styles.iconCart} onPress={() => this.productsList(item.id, item.name)}>
                                            <Thumbnail large source={{ uri: item.uri }} />
                                        </TouchableOpacity>
                                    )
                                }
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                        <View style={styles.body}>
                            <Text style={{ paddingVertical: 8, fontSize: 20, color: '#009C71' }}>Recomendation</Text>
                            <FlatList
                                data={this.props.products}
                                horizontal={true}
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
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>

                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 5,
        padding: 8,
        alignItems: 'stretch',
    },

    category: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingHorizontal: 4,
        alignItems: 'stretch',
    },
    header: {
        backgroundColor: 'white'
    },
    titleHeader: {
        color: '#009C71',
        paddingLeft: 6,
    },
    iconCart: { margin: 8, },
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
    wrapper: {
        flex: 1,
        height: 180,
    },
    imageSlide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
})
