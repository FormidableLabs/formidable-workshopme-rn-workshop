import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  Text,
  View,
  Animated,
  LayoutAnimation,
} from 'react-native';

export default class App extends Component {
  state = {
    scrollY: new Animated.Value(0),
  };
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [30, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}
        >
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </ScrollView>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Text style={styles.headerText}>HEADER</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    marginTop: Platform.select({ ios: 20, android: 0 }),
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#00a8ff',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  scrollView: {
    flex: 1,
    paddingVertical: 50,
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    margin: 20,
  },
});
