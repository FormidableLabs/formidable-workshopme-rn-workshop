import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
