import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Icon.Button
          name="arrow-right"
          backgroundColor="#ffcc00"
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
        >
          Go To Detail
        </Icon.Button>
      </View>
    );
  }
}

class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail Screen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

class About extends React.Component {
  static navigationOptions = {
    title: 'About',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="info" color={tintColor} size={24} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

const HomeNavigator = createStackNavigator({
  Home,
  Detail,
});

HomeNavigator.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" color={tintColor} size={24} />
  ),
};

export default createBottomTabNavigator({
  HomeNavigator,
  About,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    marginBottom: 20,
  },
});
