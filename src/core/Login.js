import React from 'react';
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

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email:'carine@airbnb-api.com',
        password:'password01',
        user:{}
      }
      this.submitUser = this.submitUser.bind(this);
  }

  submitUser() {
    console.log('home#submitUser onPress', this.state.email, this.state.password);
    Api.logIn ({
      email:this.state.email,
      password: this.state.password,
    }, (user) => {
      console.log('api.login ok', user);
      this.setState({user:user})
    })
  }

  render() {
    return(
      <View>
        <View style={styles.inputHolder}>
          <TextInput
             style={styles.input} underlineColorAndroid={'transparent'}
             onChangeText={(email) => this.setState({email})}
             value={this.state.email}
           />
        </View>
         <View style={styles.inputHolder}>
           <TextInput
              style={styles.input} underlineColorAndroid={'transparent'}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
         </View>
          <Button
            onPress={this.submitUser}
            title="Submit"
            color="#40b2fb"
            accessibilityLabel="Submit"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: 300,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius:12,
      marginTop:15,
      marginBottom:20,
      fontSize:18,
      paddingLeft:8,
      color: '#40b2fb',
      backgroundColor:'white',
      elevation:3,
    },
});

export default Login
