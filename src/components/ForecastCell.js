import React from 'react';
import { Text, View } from 'react-native';
import Icon from './Icon';
import { styles } from '../../styles';

const ForecastCell = props => {

    const md = (props.date + '').slice(5);
    const date = md.slice(0, 2) + ' / ' + md.slice(3, 5);
    const min = (props.temp.min + '').slice(0, 2);
    const max = (props.temp.max + '').slice(0, 2);
    const range = '' + min + ' - ' + max + '°C';

    return (
        <View style = { styles.weatherpredictioncell }>
            <Text style = { styles.weatherpredictiontext }>{ date }</Text>
            <Icon abbr = { props.abbr } />
            <Text style = { styles.weatherpredictiontext }>{ range }</Text>
        </View>
    );
};

export default ForecastCell;