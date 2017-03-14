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

import Home from './src/scenes/HomeScene';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Scene key={'home'} title={'Accueil'} component={Home} />
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
