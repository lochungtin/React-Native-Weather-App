import React from 'react'
import { Image } from 'react-native';
import { styles } from '../../styles';

const getIcon = state => {
    switch(state) {
        case 'hr':
            return require('../icons/rain.png');
        case 'lr':
            return require('../icons/showers.png');
        case 's':
            return require('../icons/showers.png');
        case 'hc':
            return require('../icons/cloudy.png');
        case 'lc':
            return require('../icons/day-cloudy.png')
        default:
            return require('../icons/day-sunny.png');
    }
}

const Icon = props => {
    const abbr = props.abbr
    return (
        <Image style = { styles.weathericon } source = { getIcon(abbr) } />
    );
}

export default Icon;