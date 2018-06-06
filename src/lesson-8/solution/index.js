import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {
  Container,
  Button,
  Text,
  Content,
  Form,
  Item,
  Input,
  Card,
  Switch,
} from 'native-base';
import { createStackNavigator } from 'react-navigation';

import firebase from 'react-native-firebase';

export default class List extends React.Component {
  state = {
    images: [],
    loading: true,
  };
  ref = firebase.firestore().collection('images');
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onCollectionUpdate = querySnapshot => {
    const images = [];
    querySnapshot.forEach(doc => {
      const { title } = doc.data();
      images.push({
        key: doc.id,
        title,
      });
    });
    this.setState({
      images,
      loading: false,
    });
  };
  render() {
    if (this.state.loading === true) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.state.images.map(img => {
          return (
            <View>
              <Text>{img.title}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 20,
  },
});
