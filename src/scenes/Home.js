import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    Image,
    Button,
    View,
    ScrollView,
    WebView,
    ActivityIndicator,
    ListView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Api from '../core/Api';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Image source={require('../../assets/img/home.jpg')} style={styles.cover}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/img/airbnb-w.png')} style={styles.imgLogo}/>
                </View>
                <TouchableHighlight onPress={Actions.rooms}>
                    <View style={styles.buttonRooms}>
                        <Text style={styles.pageTitle}>
                            VOIR LES APPARTEMENTS SUR PARIS
                        </Text>
                    </View>
                </TouchableHighlight>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    cover: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        padding: 20
    },
    logo: {
        width: '90%',
        height: 140
    },
    imgLogo: {
        width: '100%',
        height: 100
    },
    buttonRooms: {
        width: '92%',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        elevation: 2
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Circular_Air-Book',
        color: '#FF5A5F',
    }
});

export default Home
