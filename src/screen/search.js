import React from 'react';
import { FlatList, SafeAreaView, TextInput, View } from 'react-native';
import ListItem from '../components/ListItem';
import { styles } from '../../styles';

import { fetchLocations } from '../API/API';

import { connect } from 'react-redux';
import store from '../redux/store';
import { setSearch } from '../redux/action';

class search extends React.Component {

    static navigationOptions = { headerShown: false };

    render() {
        return (
            <View style = { styles.screen }>
                <View style = { styles.accentspace } />
                <TextInput 
                    style = { styles.searchbar }
                    placeholder = 'location'
                    onChangeText = { text => {
                        if (text.length > 2) {
                            fetchLocations(text).then(res => {
                                store.dispatch(setSearch(res));
                            });   
                        }
                        else {
                            store.dispatch(setSearch([]));
                        }
                    }}
                />
                <SafeAreaView>
                    <FlatList
                        style = { styles.searchbox }
                        data = { this.props.results }
                        renderItem = {({ item }) => 
                            <ListItem 
                                item = { item } 
                                nav = { this.props.navigation } destination = { 'Subscribe' } param = { item }
                            />
                        }
                        keyExtractor = { item => item.woeid + "" }
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
})

export default connect(mapStateToProps)(search);

