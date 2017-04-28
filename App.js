import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';


import Home from './views/home';
import Login from './views/login';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" initial={true} component={Home} title="Home"/>
          <Scene key="login" component={Login} title="Login"/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
