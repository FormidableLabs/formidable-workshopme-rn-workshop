import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Lesson from './lesson-5/solution';

console.ignoredYellowBox = ['Warning: isMounted'];

const App = () => <Lesson />;

export default App;

//-------

// import React, { Component } from 'react';
// import { StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';

// export default class App extends Component {
//   state = {
//     region: {
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     },
//   };
//   render() {
//     return <MapView style={styles.map} region={this.state.region} />;
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// ---

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go To Details"
//           onPress={() => {
//             this.props.navigation.navigate('Details');
//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Details',
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Detail Screen</Text>
//         <Button
//           title="Go Back"
//           onPress={() => {
//             this.props.navigation.goBack();
//           }}
//         />
//       </View>
//     );
//   }
// }

// export default createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailScreen,
// });
