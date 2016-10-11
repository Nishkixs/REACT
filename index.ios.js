/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 /*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';





AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);


class BettorHalfReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          BETTOR HALF
        </Text>
        <Text style={styles.instructions}>
          The Bettor Way to Invest
        </Text>
        <Text style={styles.slogan}>
          The Bettor Way to Invest
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color:'green',
    top:-130,
  },
  slogan: {
    textAlign: 'center',
    color:'white',
    top: -155,
    fontWeight: 'bold',

  },
});

AppRegistry.registerComponent('BettorHalfReact', () => BettorHalfReact);
