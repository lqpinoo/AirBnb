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
import Api from '../core/Api';
import Stars from '../components/Stars';
import Desc from '../components/Desc';

class User extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      favorites: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      }),
      rooms: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      }),
    }
  }

  componentDidMount() {
    Api.getUserAccount(this.props.rowData.user._id, (account) => {
        this.setState({
          user: account.account,
          favorites: this.state.favorites.cloneWithRows(account.account.favorites),
          rooms: this.state.rooms.cloneWithRows(account.account.rooms),
        });
    });
  }

  renderRooms(rowData) {
    return (
      <View>
      <Image source={{
          uri: rowData.photos[0]
      }} style={styles.photo}/>
    <View style={styles.infos}>
      <Text><Text style={styles.title}>{rowData.title}</Text>{"\n"}
      <Text style={styles.price}>{rowData.price} euros</Text>
      <Stars ratingValue={rowData.ratingValue} /> </Text>
      <Desc description={rowData.description} lines={3} size={16} />
    </View>
    </View>
    )
  }

  renderFav(rowData) {
    return (
      <View>
      <Image source={{
          uri: rowData.photos[0]
      }} style={styles.photo}/>
      <View style={styles.infos}>
        <Text><Text style={styles.title}>{rowData.title}</Text>{"\n"}
        <Text style={styles.price}>{rowData.price} euros </Text>
        <Stars ratingValue={rowData.ratingValue} /> </Text>
        <Desc description={rowData.description} lines={3} size={16} />
      </View>
    </View>
    )
  }

  render() {
    if (this.state.favorites.getRowCount() === 0) { // si l'objet account est vide on display un loader
        return (
            <View style={styles.containerWait}>
                <ActivityIndicator color={'#FF5A5F'}/>
            </View>
        );
    } else {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.userIntro}>
            <Text style={styles.textIntro}><Text style={styles.name}>{this.state.user.username}</Text>
            {"\n"}
            <Desc description={this.state.user.description} lines={2} size={14} />
          </Text>
            <Image source={{
                uri: this.state.user.photos[0]
              }}
              style={styles.photoIntro} />
        </View>
        <View style={styles.rooms}>
          <View style={styles.header}>
            <Text style={styles.bigTitle}>Ses chambres</Text>
          </View>

          <ListView
            dataSource={this.state.rooms}
            renderRow={
              this.renderRooms
            } />
        </View>
        <View style={styles.fav}>
          <View style={styles.header}>
            <Text style={styles.bigTitle}>Ses favoris</Text>
          </View>
          <ListView
            dataSource={this.state.favorites}
            renderRow={
              this.renderFav
            } />
        </View>
      </ScrollView>
    );
  }
}

}
const styles = StyleSheet.create({
  containerWait: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#fff',
  },
    container: {
        flex: 1,
        paddingTop:0,
        backgroundColor: '#f4f4f4',
        paddingBottom: 60,
        marginBottom:50,
    },
    userIntro:{
      flex:1,
      flexDirection:'row',
      alignItems:'stretch',
      justifyContent:'center',
    },
    textIntro: {
      flex:1,
      padding:15,
      backgroundColor:'white',
      borderBottomColor: '#cccccc',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    name: {
      fontSize:30,
      color: '#FF5A5F',
      marginBottom:20,
      fontFamily: 'Circular_Air-Bold',
    },
    descIntro : {
      fontSize:14,
    },
    photoIntro: {
      flex:1,
      width:'50%',
      height:250,
    },
    header: {
      backgroundColor:'#434958',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:15,
    },
    bigTitle:{
      fontSize:22,
      color: '#fff',
      fontFamily: 'Circular_Air-Bold',
    },
    photo: {
      width:'100%',
      height:160,
    },
    infos: {
      padding:12,
    },
    title: {
      fontSize:18,
      color:'#FF5A5F',
      marginBottom:10,
      paddingTop:10,
      paddingBottom:10,

    },
    desc: {
      paddingTop:5,
      paddingBottom:10,
    },
    price : {
      backgroundColor:'#eeba20',
      padding:7,
      paddingLeft: 8,
      paddingRight:8,
      color:'white',
      marginRight: 8,
    },
});

export default User
