import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
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
import Store from 'react-native-simple-store';
import Login from '../core/Login';

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
              <Login />
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    cover: {
        flex: 1,
        paddingTop:70,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        padding: 20
    },
    logo: {
        width: '90%',
        marginBottom:30,
    },

    imgLogo: {
        width: '100%',
        height: 100
    },
    buttonRooms: {
        width: '80%',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Circular_Air-Book',
        color: '#FF5A5F',
    }
});

export default Home
