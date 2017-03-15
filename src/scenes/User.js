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



class User extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
      dataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      }),
    }
  }

  componentDidMount() {
    Api.getUserAccount(this.props.rowData.user._id, (account) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(user.account)
        });
    });
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.name}>{this.props.rowData.user.account.username}</Text>
        <Text style={styles.desc}>{this.props.rowData.user.account.description}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:80,
        backgroundColor: '#efefef',
        paddingBottom: 10,
    },
    name : {
      fontSize:30,
      paddingLeft:20,
      color: '#FF5A5F',
      fontFamily: 'Circular_Air-Bold',
    },
});

export default User
