import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';

const ListItem = props => {
    
    return (
        <TouchableOpacity 
            style = { styles.listitem }
            onPress = { () => props.nav.navigate(props.destination, props.param) }
        >
            <Text style = { styles.listitemtext }>{ props.item.title }</Text>
            <Text style = { styles.listitemdetail }>{ props.item.location_type } | { props.item.woeid }</Text>
        </TouchableOpacity>
    );
}

export default ListItem;