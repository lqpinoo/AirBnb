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
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={{backgroundColor: '#FF5A5F'}} barButtonIconStyle={{ tintColor: '#fff' }} titleStyle={{color : "#FFF"}} >
            <Scene
           key={'tab'}
           tabs
           type={'replace'} style={{backgroundColor: '#fff'}}>
             <Scene key={'home'} title={'Accueil'} hideNavBar={true} component={Home}
               icon={(props) =>
                 <Icon
                   name={'md-home'}
                   style={{fontSize:25,}}
                   color={props.selected ? '#FF5A5F' : '#888' }
                   /> } />
               <Scene key={'rooms'} hideNavBar={true} component={Rooms}
                 icon={(props) =>
                   <Icon
                    name={'md-pin'}
                    style={{fontSize:25,}}
                    color={props.selected ? '#FF5A5F' : '#888' }
                    /> } />
              <Scene key={'user'} hideNavBar={true} component={User}/>
              <Scene key={'room'} hideNavBar={true} title={'Room'} component={Room}/>
          </Scene>


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
