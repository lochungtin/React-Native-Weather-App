import React from 'react'
import AppNavigator from './src/navigation/index'
import {Provider as StoreProvider} from 'react-redux'
import store from './src/redux/store'

export default class App extends React.Component{
  render() {
    return (
      <StoreProvider store = {store}>
        <AppNavigator/>
      </StoreProvider>
    );
  }
}