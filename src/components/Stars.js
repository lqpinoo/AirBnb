import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

    renderStars(rating) {
      return ('★'.repeat(Math.floor(rating)) + '☆'.repeat(5-Math.floor(rating)))
    }

  render() {
    if (this.props.ratingValue < 0) {
      return(
        <Text></Text>
      );
    } else {
      return (
        <Text style={styles.starsFull}>
          {this.renderStars(this.props.ratingValue)}
        </Text>
      );
    }
  }

}

const styles = StyleSheet.create({
    starsFull: {
      color:'#f1c31e',
      fontSize:18,
    },
});


export default Stars
