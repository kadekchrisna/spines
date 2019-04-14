// Libs
import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content, View, Header, Right, Title, Left, CardItem, Card, Body } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default class Products extends Component {

    componentDidMount() {
        this.props.getAll();
        console.log(this.props.products);
        

    }
    onPress = (item) => {
        Alert.alert('Here');
        // this.props.navigation.navigate('Detail', {
        //     name: item.name,
        //     description: item.description,
        //     uri: item.uri,
        //     price: item.price,
        //     id: item.id

        // });
    }
    render() {
        return (
            <Container >
                <Header style={styles.header} >
                    <Left>
                        <Title style={styles.titleHeader}>Spine's</Title>
                    </Left>
                    <Right>
                        <TouchableOpacity style={styles.iconCart} onPress={() => this.props.navigation.navigate('Cart')}>
                            <FontAwesome name="shopping-cart" size={24} color='#009C71' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.container}>

                    <StatusBar backgroundColor="#E7E7E7" barStyle="dark-content" />
                    <Content>
                        <FlatList
                            data={this.props.products}
                            renderItem={({ item }) =>
                                (
                                    <Card>
                                        <TouchableOpacity onPress={() => this.onPress(item)}>
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
                                                            {item.price}
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
                    </Content>
                </View>
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
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 4
    },
    textPrice: {
        fontSize: 18,
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
        color: '#009C71'
    },
    iconCart: { marginLeft: 8, marginRight: 8 },
    itemName: { color: '#009C71', fontSize: 12 }
});
