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

class Card extends React.Component {

    constructor(props) {
        super(props);
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
                    <Image source={{
                        uri: this.props.rowData.user.account.photos[0]
                    }} style={styles.userPhoto}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToRoom}>
                    <View style={styles.description}>
                        <Text style={styles.descText} numberOfLines={3}>
                            {this.props.rowData.description}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.meta}>
                    <Text style={styles.metaText}>
                        - {this.props.rowData.reviews}
                        commentaires
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef'
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
        borderBottomColor: '#333',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    bigPhoto: {
        width: '100%',
        height: 220
    },
    userPhoto: {
        position: 'absolute',
        width: 60,
        height: 60,
        left: 0,
        top: 20,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 4
    },
    description: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 15,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    price: {
        position: 'absolute',
        top: 30,
        left: 50,
        color: 'white',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#FF5A5F',
        fontFamily: 'Circular_Air-Book'
    },
    meta: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 15
    },
    descText: {
        fontSize: 16,
        fontFamily: 'Circular_Air-Book'
    },
    metaText: {
        fontFamily: 'Circular_Air-Book'
    }
});

export default Card
