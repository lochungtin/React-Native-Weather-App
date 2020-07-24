import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import { styles } from '../../styles'

import { connect } from 'react-redux';

class home extends React.Component{

    static navigationOptions = { headerShown: false };

    render() {
        return (
            <View style = { styles.screen }>
                <View style = { styles.accentspace }/>
                <Text style = { styles.headertitle }>Subscribed Locations</Text>
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
                                <ListItem 
                                    item = { item } 
                                    nav = { this.props.navigation } destination = { 'Detail' } param = { item }
                                />
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
    sub: state.sub,
})

export default connect(mapStateToProps)(home);