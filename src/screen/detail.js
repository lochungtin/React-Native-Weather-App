import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from '../components/Icon';
import ForecastCell from '../components/ForecastCell';
import { styles } from '../../styles';

import { fetchLocation } from '../API/API';

import { connect } from 'react-redux';
import store from '../redux/store';
import { setDetail } from '../redux/action';

var obj = {}
var weather0 = {};
var weather1 = {};
var weather2 = {};
var weather3 = {};
var weather4 = {};
var weather5 = {};

class details extends React.Component {

    static navigationOptions = { headerShown: false };

    constructor(props) {
        super();
        obj = props.navigation.state.params;
        fetchLocation(obj.woeid).then(res => {
            weather0 = res.consolidated_weather[0];
            weather1 = res.consolidated_weather[1];
            weather2 = res.consolidated_weather[2];
            weather3 = res.consolidated_weather[3];
            weather4 = res.consolidated_weather[4];
            weather5 = res.consolidated_weather[5];
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
                <ScrollView>
                    <View style = { styles.details }>
                        <View style = { styles.detailbubble }>
                            <Text style = { styles.detailtext }>Current Temperature:</Text>
                            <Text style = { styles.detailtext }>{ (weather0.the_temp + '').slice(0, 4) }°C</Text>
                        </View>
                        <View style = { styles.detailbubble }>
                            <Text style = { styles.detailtext }>Temp. Range:</Text>
                            <Text style = { styles.detailtext }>{ (weather0.min_temp + '').slice(0, 4) } - { (weather0.max_temp + '').slice(0, 4) }°C</Text>
                        </View>
                        <View style = { styles.detailbubble }>
                            <Text style = { styles.detailtext }>Weather: </Text>
                            <View styles = { styles.weather }>
                                <Text style = { styles.detailtext }>{ weather0.weather_state_name }</Text>
                                <Icon abbr = { weather0.weather_state_abbr } />
                            </View>
                        </View>
                        <View style = { styles.weatherpredictionbox }>
                            <View style = { styles.detailbubblecenter }>
                                <Text style = { styles.detailtextcenter }>Weather Forecast </Text>
                            </View>
                            <View style = { styles.weatherpredictionrow }>
                                <ForecastCell date = { weather0.applicable_date } abbr = { weather0.weather_state_abbr } temp = { {min: weather0.min_temp, max: weather0.max_temp} } />
                                <ForecastCell date = { weather1.applicable_date } abbr = { weather1.weather_state_abbr } temp = { {min: weather1.min_temp, max: weather1.max_temp} } />
                                <ForecastCell date = { weather2.applicable_date } abbr = { weather2.weather_state_abbr } temp = { {min: weather2.min_temp, max: weather2.max_temp} } />
                            </View>
                            <View style = {styles.weatherpredictionrow }>
                                <ForecastCell date = { weather3.applicable_date } abbr = { weather3.weather_state_abbr } temp = { {min: weather3.min_temp, max: weather3.max_temp} }  />
                                <ForecastCell date = { weather4.applicable_date } abbr = { weather4.weather_state_abbr } temp = { {min: weather4.min_temp, max: weather4.max_temp} } />
                                <ForecastCell date = { weather5.applicable_date } abbr = { weather5.weather_state_abbr } temp = { {min: weather5.min_temp, max: weather5.max_temp} }  />
                            </View>
                        </View>
                        <View style = { styles.detailbubble }>
                            <Text style = { styles.detailtext }>Humidity: </Text>
                            <Text style = { styles.detailtext }>{ weather0.humidity + '%'}</Text>
                        </View>
                        <View style = { styles.detailbubble }>
                            <Text style = { styles.detailtext }>Visibility: </Text>
                            <Text style = { styles.detailtext }>{ (weather0.visibility + '').slice(0, 4) }</Text>
                        </View>
                        <View style = { styles.detailbubble }>
                            <Text style = { styles.detailtext }>Wind Direction: </Text>
                            <Text style = { styles.detailtext }>{ weather0.wind_direction_compass } { (weather0.wind_direction + '').slice(0, 5) }</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail
})

export default connect(mapStateToProps)(details);