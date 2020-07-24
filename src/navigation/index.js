import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { TabNavStyles } from '../../styles'

import details from '../screen/detail';
import home from '../screen/home';
import search from '../screen/search';
import settings from '../screen/settings';
import subscribe from '../screen/subscribe';

const HomeStack = createStackNavigator(
    {
        Home: home,
        Detail: details,
    },
    {
        initialRouteName: 'Home'
    }
);

const SearchStack = createStackNavigator(
    {
        Search: search,
        Subscribe: subscribe,
    },
    {
        initialRouteName: 'Search'
    }
);

const TabNav = createBottomTabNavigator(
    {
        Search: SearchStack,
        Home: HomeStack,
        Settings: settings,
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: TabNavStyles,
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') iconName = 'home'
              if (routeName === 'Search') iconName = 'search1'
              if (routeName === 'Settings') iconName = 'setting'
              return <AntDesign name={iconName} size={25} color={tintColor} />;
            },
        })
    }
)



export default createAppContainer(TabNav);