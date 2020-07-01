import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../components/Icon';
import { styles } from '../../styles';

import { fetchLocation } from '../API/API';

import { connect } from 'react-redux';
import store from '../redux/store';
import { setDetail, subLocation } from '../redux/action';

var obj = {};
var currentWeather = {};

const subbed = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

class subscribe extends React.Component {

    static navigationOptions = { headerShown: false };

    constructor(props) {
        super();
        obj = props.navigation.state.params
        fetchLocation(obj.woeid).then(res => {
            currentWeather = res.consolidated_weather[0];
            store.dispatch(setDetail(res));
        });
    }

    render() {
        return (
            <View style = { styles.screen }>
                <View style = { styles.accentspace } />
                <Text style = { styles.headertitle }>{ this.props.detail.title }</Text>
                <Text style = { styles.locationtime }>
                    { (this.props.detail.time + '').slice(0, 10) } | { ( this.props.detail.time + '').slice(11, 13) } AM
                </Text>
                <View style = { styles.details }>
                    <View style = { styles.detailbubble }>
                        <Text style = { styles.detailtext }>Current Temperature:</Text>
                        <Text style = { styles.detailtext }>{ (currentWeather.the_temp + '').slice(0, 4) }°C</Text>
                    </View>
                    <View style = { styles.detailbubble }>
                        <Text style = { styles.detailtext }>Temp. Range:</Text>
                        <Text style = { styles.detailtext }>{ (currentWeather.min_temp + '').slice(0, 4) } - { (currentWeather.max_temp + '').slice(0, 4) }°C</Text>
                    </View>
                    <View style = { styles.detailbubble }>
                        <Text style = { styles.detailtext }>Weather: </Text>
                        <View styles = { styles.weather }>
                            <Text style = { styles.detailtext }>{ currentWeather.weather_state_name }</Text>
                            <Icon abbr = { currentWeather.weather_state_abbr } />
                        </View>
                    </View>                
                {   
                    subbed(this.props.sub, obj) ? <></> :
                    <TouchableOpacity
                        style = { styles.subbutton }
                        onPress = { () => {
                            store.dispatch(subLocation(obj));
                        }}
                    >
                        <Text style = { styles.detailtextcenter }>Add to Feed for more Details</Text>
                    </TouchableOpacity>
                }
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail,
    sub: state.sub,
})

export default connect(mapStateToProps)(subscribe);
