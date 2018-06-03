import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My App</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View style={styles.footer} />
      </View>
    );
  }
}

const boxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 0,
    padding: 10,
    backgroundColor: 'blue',
  },
  footer: {
    flex: 0,
    height: 30,
    backgroundColor: 'red',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  box: {
    backgroundColor: 'green',
    width: boxWidth / 2 - 30,
    margin: 10,
    height: 200,
  },
  title: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});
