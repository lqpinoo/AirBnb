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
import Map from 'react-native-maps';
import Api from '../core/Api';
import UserAvatar from '../components/UserAvatar';
import Stars from '../components/Stars';
import Desc from '../components/Desc';

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: 3,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100
        };
    }


    render() {

      const goToUser = () => Actions.user({
        rowData: this.props.rowData,
      });

        return (
            <ScrollView style={styles.container}>
                <Image source={{
                    uri: this.props.rowData.photos[0]
                }} style={styles.bigPhoto}/>
              <View style={styles.metaZero}>
                <Stars style={styles.rating} ratingValue={this.props.rowData.ratingValue} />
                <Text style={styles.price}>{this.props.rowData.price} euros</Text>
              </View>
                <View style={styles.card}>
                    <Text style={styles.title}>{this.props.rowData.title}</Text>
                    <Desc description={this.props.rowData.description} size={16} lines={5} />
                    <View style={styles.metaHolder}>
                        <View style={styles.metaOne}>
                            <Text style={styles.userAbout}>A propos de {this.props.rowData.user.account.username} :</Text>
                            <Text style={styles.userDesc} numberOfLines={6}>{this.props.rowData.user.account.description}</Text>
                        </View>
                        <View style={styles.metaTwo}>
                          <TouchableOpacity style={{width:100, height:100}} onPress={goToUser} >
                            <UserAvatar photo={this.props.rowData.user.account.photos[0]} width={70} height={70} style={styles.userPhoto}/>
                          </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.roomMap}>
                        <Map style={{
                            width: '100%',
                            height: 250
                        }} initialRegion={{
                            latitude: this.props.rowData.loc[1],
                            longitude: this.props.rowData.loc[0],
                            latitudeDelta: this.state.latitudeDelta,
                            longitudeDelta: this.state.longitudeDelta
                        }}>
                            <Map.Marker coordinate={{
                                latitude: this.props.rowData.loc[1],
                                longitude: this.props.rowData.loc[0]
                            }} image={require('../../assets/img/marker.png')} title={this.props.rowData.title} description={this.props.rowData.price + ' euros'}/>
                        </Map>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e3e3',
    },
    bigPhoto: {
        width: '100%',
        height: 280
    },
    card: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        top: 10,
        padding: 10,
        paddingBottom: 25,
        backgroundColor: 'white',
        marginTop: -50,
        marginBottom:70,
    },
    title: {
        color: '#FF5A5F',
        fontSize: 20,
        fontFamily: 'Circular_Air-Bold',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    metaHolder: {
        flex:1,
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
    },
    metaOne: {
        flex:1,
        flexGrow:3,
        padding: 10,
    },
    userAbout: {
        fontFamily: 'Circular_Air-Bold',
        marginBottom: 15,
    },
    userDesc: {
        textAlign: 'justify',
    },
    metaTwo: {
        flex:1,
        paddingTop: 10,

    },
    metaZero : {
        position:'absolute',
        top: 180,
        right:10,
    },
    price: {
        color: 'white',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#FF5A5F',
        fontFamily: 'Circular_Air-Book'
    },

    roomMap: {
        marginTop: 15,
        backgroundColor: '#f0f0f0',
        padding: 4
    }
});

export default Room
