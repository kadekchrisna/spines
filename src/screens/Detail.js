// Libs
import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, Dimensions, View, ToastAndroid } from 'react-native';
import { Container, Content, Body, Card, CardItem } from 'native-base';
import Swiper from 'react-native-swiper';
import { WaveIndicator } from 'react-native-indicators';
import StarRating from 'react-native-star-rating';

import { stringToRupiah } from "../redux/helpers/Currency";
import { getMyValue } from '../redux/storage/AsyncStorage';

export default class Detail extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
        };
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id', '');
        this.props.getProduct(id);
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    toCart(idProduct, price, name) {
        this.toast(name);
        if (this.props.isLoggedIn === false) {
            this.props.navigation.navigate('Login')
        } else {
            this.checkTokenToCart(idProduct, price);
        }
    }
    async checkTokenToCart(idProduct, price) {
        const token = await getMyValue('token')
        if (token) {
            // console.log(token);
            const { id } = this.props.user
            // console.log(id);
            this.props.addToCart(idProduct, price, id, token);
            this.props.navigation.navigate('Cart');

        } else {
            const { type, token } = this.props.token
            const authToken = type + ' ' + token;
            const { id } = this.props.user
            this.props.addToCart(idProduct, price, id, authToken);
            this.props.navigation.navigate('Cart');
            // console.log(id, authToken);

        }

    }
    toast(name) {
        ToastAndroid.showWithGravityAndOffset(
            `${name} has added to your cart.`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }


    render() {
        console.log(this.props.products);

        if (this.props.isLoading === true) return (<WaveIndicator color="#009C71" size={60} />)
        const { name, uri, description, price, id } = this.props.products;

        return (
            <Container >
                <Content>
                    <View style={styles.container}>
                        <View style={styles.containerSwiper}>
                            <Card>
                                <CardItem>
                                    <Swiper style={styles.wrapper}>
                                        <Image source={{ uri: uri }} style={styles.imageCard} />
                                    </Swiper>
                                </CardItem>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <View style={styles.mainInfo}>
                                    <CardItem style={styles.cardHeader}>
                                        <Text style={styles.textMed}>{name}</Text>
                                        <Text style={styles.textPrice}>{stringToRupiah(String(price))}</Text>
                                    </CardItem>
                                    <CardItem style={styles.cardStar}>
                                        <Text style={styles.textStart}>{this.state.starCount}/5</Text>
                                        <StarRating
                                            disabled={false}
                                            maxStars={5}
                                            starSize={30}
                                            fullStarColor={'#f7c744'}
                                            rating={this.state.starCount}
                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                        />
                                    </CardItem>
                                </View>
                                <View style={styles.hrLine} />
                                <CardItem>
                                    <View style={styles.cardBody}>
                                        <Text>
                                            {description}
                                        </Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => this.toCart(id, price, name)}
                        >
                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
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
    mainInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
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
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
    cardBody: {
        paddingBottom: 10,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: 0,
        paddingLeft: 20,
        marginTop: 2
    },
    cardStar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: 0,
        paddingLeft: 20,
        marginTop: 8,
    },
    textMed: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    imageCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    buttonCart: {
        height: 610
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapper: {
        flex: 1,
        height: Dimensions.get('window').height / 2,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    containerSwiper: {
        flex: 1,
        flexDirection: 'column',
    },
    textStart: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textPrice: {
        fontSize: 18
    }
});
