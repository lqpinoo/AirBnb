import React from 'react';
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

class Desc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: 3,
    }
    this.toggleLines = this.toggleLines.bind(this);
  }

  toggleLines() {
    if (this.state.lines > 1) {
      this.setState({lines: 0})
    } else if (this.state.lines === 0) {
      this.setState({lines: 3})
    }
  }

  render() {
    return(
      <View>
        <Text style={[styles.desc, {fontSize: this.props.size}] } numberOfLines={this.state.lines} onPress={this.toggleLines} >{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  desc: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'justify',
    fontFamily: 'Circular_Air-Book',
    borderBottomColor: '#cccccc',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
});

export default Desc;
