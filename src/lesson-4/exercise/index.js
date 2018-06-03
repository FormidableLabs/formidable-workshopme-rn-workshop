import React, { Component } from 'react';
import { Platform, FlatList, StyleSheet, Text, View } from 'react-native';

import data from '../data';

const days = data.reduce((acc, c) => {
  if (!acc[c.day]) {
    acc[c.day] = [];
  }
  acc[c.day].push(c);
  return acc;
}, {});

const sections = Object.keys(days).map(d => {
  return {
    title: d,
    data: days[d],
  };
});

const Separator = () => (
  <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />
);

export default class App extends Component {
  _keyExtractor = item => item.id.toString();
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.list}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Day: {item.day}</Text>
              <Text style={styles.listItemText}>Activity: {item.title}</Text>
              <Text style={styles.listItemText}>Time: {item.time}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  list: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  listItem: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  listItemText: {
    marginBottom: 5,
  },
});
