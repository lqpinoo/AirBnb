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


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username:'',
          password:'',
        }
    }

    render() {

      const submitUser = () =>Store.save('user', {
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        console.log('Saved', this.state.username, this.state.password);
      });


        return (
            <Image source={require('../../assets/img/home.jpg')} style={styles.cover}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/img/airbnb-w.png')} style={styles.imgLogo}/>
                </View>
                <TextInput
                   style={styles.input}
                   onChangeText={(username) => this.setState({username})}
                   value={this.state.username}
                 />
                 <TextInput
                    style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                  />
                  <Button
                    onPress={submitUser}
                    title="Submit"
                    color="#40b2fb"
                    accessibilityLabel="Submit"
                  />
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
        marginBottom:30,
    },
    input: {
      height: 50,
      width: 300,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius:6,
      marginTop:20,
      marginBottom:20,
      fontSize:18,
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
