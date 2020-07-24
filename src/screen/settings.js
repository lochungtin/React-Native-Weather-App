import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles'

import { connect } from 'react-redux';
import store from '../redux/store';
import { unsubLocation } from '../redux/action';

class settings extends React.Component{

    static navigationOptions = { title: 'Settings' };

    render() {
        return (
            <View style = { styles.screen }>
                <View style = { styles.accentspace} />
                <Text style = { styles.headertitle }>Manage Subcriptions</Text>
                {
                    this.props.sub.length === 0 ?
                    <View style = { styles.centertext }>
                        <Text style = {{ color: '#84817a'}}>You currently aren't subscribed to any locations.</Text>
                    </View> :
                    <SafeAreaView>
                        <FlatList
                            style = { styles.sublist }
                            data = { this.props.sub }
                            renderItem = {({item}) => 
                                <View style = { styles.settingslistitem }>
                                    <View style = { styles.locationbubble } >
                                        <Text style = { styles.detailtext }>{ item.title }</Text>
                                    </View>
                                    <TouchableOpacity
                                        style = { styles.unsubbutton }
                                        onPress = { () => {store.dispatch(unsubLocation(item))} }
                                    >
                                        <Text style = { styles.unsubtext }>REMOVE</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor = { item => item.woeid + '' }
                        />
                    </SafeAreaView>
                }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    sub: state.sub
})

export default connect(mapStateToProps)(settings);