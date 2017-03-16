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
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Stars from './Stars';
import UserAvatar from './UserAvatar';
import Desc from './Desc';


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          lines:3,
        }
    }

    render() {
      const goToRoom = () => Actions.room({
        rowData: this.props.rowData,
      });
        return (
            <View style={styles.card}>
                <TouchableOpacity onPress={goToRoom} >
                    <Text style={styles.title}>
                        {this.props.rowData.title}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToRoom}>
                    <Image source={{
                        uri: this.props.rowData.photos[0]
                    }} style={styles.bigPhoto}/>
                    <Text style={styles.price}>
                        {this.props.rowData.price}
                        euros
                    </Text>
                    <UserAvatar
                      photo={this.props.rowData.user.account.photos[0]}
                      width={60} height={60}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToRoom}>
                    <View style={styles.description}>
                    <Desc description={this.props.rowData.description} size={16} />
                    </View>
                </TouchableOpacity>
                <View style={styles.meta}>
                    <Stars ratingValue={this.props.rowData.ratingValue} />
                    <Text style={styles.metaText}>
                        - {this.props.rowData.reviews} commentaires
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
    },
    header: {
        backgroundColor: '#FF5A5F',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    pageTitle: {
        fontSize: 26,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Circular_Air-Bold'
    },
    rooms: {
        paddingLeft: 15,
        paddingRight: 15
    },
    card: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 3,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        elevation: 4
    },
    title: {
        fontSize: 20,
        fontFamily: 'Circular_Air-Bold',
        fontWeight: '900',
        paddingTop: 20,
        paddingLeft: 15,
        paddingBottom: 20,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    bigPhoto: {
        width: '100%',
        height: 220
    },
    price: {
        position: 'absolute',
        top: 30,
        left: 55,
        color: 'white',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#FF5A5F',
        fontFamily: 'Circular_Air-Book'
    },
    meta: {
        flex:1,
        flexDirection:'row',
        paddingTop:3,
        paddingBottom: 15,
        paddingRight: 10,
        paddingLeft: 15
    },
    metaText: {
        fontFamily: 'Circular_Air-Book',
        lineHeight: 22,
    }
});

export default Card
