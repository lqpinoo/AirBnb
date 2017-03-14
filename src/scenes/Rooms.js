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
import {Actions} from 'react-native-router-flux';
import Card from '../components/Card';
import Api from '../core/Api';

class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'paris',
            rooms: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }

    componentDidMount() {
        Api.getRooms(this.state.city, (rooms) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(rooms.rooms)
            });
        });
    }

    renderItem(rowData) {
        return (
          <Card rowData={rowData} />
        )
    }

    render() {

        if (this.state.dataSource.getRowCount() === 0) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            return (
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                      <Text style={styles.pageTitle}>
                          Les appartements sur Paris
                      </Text>
                    </View>
                    <View style={styles.rooms}>
                      <ListView
                        dataSource={this.state.dataSource}
                        renderRow={
                          this.renderItem
                        } />
                    </View>
                </ScrollView>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
    },
    header:{
      backgroundColor: '#FF5A5F',
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:15,
      paddingRight:15,
    },
    pageTitle: {
        fontSize: 26,
        color: '#fff',
        textAlign:'center',
        fontFamily: 'Circular_Air-Bold',
    },
    rooms : {
      paddingLeft:15,
      paddingRight:15,
    },
});

export default Rooms
