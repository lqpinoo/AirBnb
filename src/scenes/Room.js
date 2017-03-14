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

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: 3
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image source={{
                    uri: this.props.rowData.photos[0]
                }} style={styles.bigPhoto}/>
              <Text style={styles.price}>{this.props.rowData.price} euros</Text>
                <View style={styles.cardHolder}>
                </View>
                <ScrollView style={styles.card}>
                    <Text style={styles.title}>{this.props.rowData.title}</Text>
                    <TouchableOpacity >
                        <Text style={styles.descText}>{this.props.rowData.description}</Text>
                    </TouchableOpacity>
                    <View style={styles.metaHolder}>
                      <View style={styles.metaOne}>
                      <Text style={styles.userAbout}>A propos de {this.props.rowData.user.account.username} :</Text>
                      <Text style={styles.userDesc} numberOfLines={6}>{this.props.rowData.user.account.description}</Text>
                      </View>
                      <View style={styles.metaTwo}>
                      <Image source={{
                          uri: this.props.rowData.user.account.photos[0]
                      }} style={styles.userPhoto}/>
                      </View>
                    </View>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        paddingBottom:10,
    },
    bigPhoto: {
        width: '100%',
        height: 280
    },
    userPhoto: {
        width: 150,
        height: 150,
    },
    card: {
        flex:1,
        width: '95%',
        alignSelf:'center',
        top: 10,
        padding: 10,
        paddingBottom:30,
        backgroundColor: 'white',
        marginTop: -50,
        marginBottom:25,
    },
    title: {
        color: '#FF5A5F',
        fontSize: 20,
        fontFamily: 'Circular_Air-Bold',
        fontWeight: '900',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    metaHolder: {
      width:'100%',
      flexDirection:'row'
    },
    metaOne: {
      width: '65%',
      padding:10,
    },
    userAbout: {
      fontFamily: 'Circular_Air-Bold',
      marginBottom:15,
    },
    userDesc: {
      textAlign:'justify',
    },
    metaTwo: {
      width:'25%',
      padding:10,
      paddingTop:20,
    },
    descText: {
        fontSize: 16,
        fontFamily: 'Circular_Air-Book',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: '#cccccc',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    price: {
        position: 'absolute',
        top: 202,
        right: 12,
        color: 'white',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#FF5A5F',
        fontFamily: 'Circular_Air-Book'
    }
});

export default Room
