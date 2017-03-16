import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
} from 'react-native';

class User extends React.Component {
  render() {
    if (this.props.photo === undefined) {
      return(
        <Text>
        </Text>
      );
    } else {
      return(
        <Image
        source={{
            uri: this.props.photo
        }}
        style={[styles.userPhoto, {width:this.props.width, height:this.props.height}]}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  userPhoto: {
      position: 'absolute',
      left: 5,
      top: 20,
      borderRadius: 50,
      borderColor: 'white',
      borderWidth: 4
  },
});

export default User
