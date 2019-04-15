// Libs
import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content, Body, Card, CardItem, View } from 'native-base';
import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating';


import { stringToRupiah } from "../redux/helpers/Currency";

export default class Detail extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5,
            name: '',
            price: '',
            id: '',
            description: '',
        };
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id','');        
        this.props.getProduct(id);
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    toCart(id, price){
        this.props.addToCart(id, price);
        this.props.navigation.navigate('Cart');
    }


    render() {
        if(!this.props.products) return (<Text>loading...</Text>) 


        const { name, uri, description, price, id } = this.props.products;

        return (
            <Container >
                <View style={styles.container}>
                    <Content>
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
                                    <Body style={styles.cardBody}>
                                        <Text>
                                            {description}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => this.toCart(id, price)}
                        >
                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </Content>
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
