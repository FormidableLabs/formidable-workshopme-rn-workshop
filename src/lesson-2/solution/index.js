import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollview}
          horizontal
          contentContainerStyle={styles.scrollcontainer}
          pagingEnabled={true}
        >
          <Image source={require('../assets/beer1.jpg')} />
          <Image source={require('../assets/beer2.jpg')} />
          <Image source={require('../assets/beer3.jpg')} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollview: {
    flex: 0,
    flexGrow: 0,
    height: 200,
    width: 200,
  },
});
