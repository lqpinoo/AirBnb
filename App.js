import React, { Component } from 'react';
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
  TouchableHighlight,
} from 'react-native';
import Api from './src/core/Api';
import {Scene, Router} from 'react-native-router-flux';
import Home from './src/scenes/Home';
import Rooms from './src/scenes/Rooms';
import Room from './src/scenes/Room';
import User from './src/scenes/User';

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={{backgroundColor: '#FF5A5F'}} barButtonIconStyle={{ tintColor: '#fff' }} titleStyle={{color : "#FFF"}} >
          <Scene  key={'home'} title={'Accueil'} hideNavBar={true} component={Home} />
          <Scene key={'rooms'} title={'Rooms'} component={Rooms} />
          <Scene key={'room'} title={'Room'} hideNavBar={false} component={Room}/>
          <Scene key={'user'} title={'User'} hideNavBar={false} component={User} />
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
