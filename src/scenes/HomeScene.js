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

import Api from '../core/Api';

class HomeScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'paris',
      rooms: [],
      dataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
    Api.getRooms(this.state.city, (rooms) => {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rooms.rooms)
      });
      console.log('HomeScene#componentDidMount rooms : ', rooms);
    });
  }

  renderItem(rowData) {
    console.log('rowData# is : ', rowData);
  return (
    <View style={styles.card}>
      <Text
        style={styles.title}
        >
        {rowData.title}
      </Text>

      <Image
      source={{uri: rowData.photos[0]}}
      style={styles.bigPhoto}
      />
      <Text
        style={styles.price}
        >
        {rowData.price} euros
      </Text>
      <Image
      source={{uri: rowData.user.account.photos[0]}}
      style={styles.userPhoto}
      />

    <View style={styles.description}>
      <Text style={styles.descText} numberOfLines={3}>
        {rowData.description}
      </Text>
    </View>
    <View style={styles.meta}>
      <Text>
        {rowData.reviews} commentaires -
      </Text>
    </View>
    </View>
  );
}

  render() {

    if (this.state.dataSource.getRowCount() === 0) {
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return(
        <View style={styles.container}>
          <Text style={styles.pageTitle}>
            Les appartements sur paris
          </Text>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem} />
      </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  pageTitle:{
    fontSize:30,
    color: '#FF5A5F',
  },
  card: {
    position:'relative',
    backgroundColor: '#FFFFFF',
    marginBottom:15,
    marginTop:15,
    borderRadius: 3,
    shadowOffset:{
           width: 10,
           height: 10,
       },
       shadowColor: 'black',
       shadowOpacity: 1.0,
    elevation: 4,
  },
  title: {
    fontSize:20,
    fontFamily: 'Circular_Air-Bold',
    fontWeight: '900',
    paddingTop:20,
    paddingLeft: 10,
    paddingBottom:20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  bigPhoto: {
    width:'100%',
    height:220,
  },
  userPhoto: {
    position:'absolute',
    width:60,
    height:60,
    left:0,
    top:90,
    borderRadius:50,
    borderColor:'white',
    borderWidth:4,

  },
  description: {
    width: '100%',
    paddingTop:15,
    paddingBottom:15,
    paddingRight:20,
    paddingLeft:15,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
    price: {
    position: 'absolute',
    top:100,
    left:50,
    color:'white',
    padding:10,
    paddingLeft:15,
    backgroundColor: '#FF5A5F',
  },
  meta: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:20,
    paddingLeft:15,
  },
  descText: {
    fontSize:16,
  },
});

export default HomeScene
