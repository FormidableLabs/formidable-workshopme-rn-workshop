import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class App extends Component {
  state = {
    region: null,
  };
  componentDidMount() {
    Platform.OS === 'ios' && navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(
      pos => {
        let { latitude, longitude } = pos.coords;
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          },
        });
      },
      err => {
        alert(err);
      }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.region ? (
          <MapView style={styles.map} region={this.state.region}>
            <Marker
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
              }}
              title="My Marker"
              description="Phone default location"
            />
          </MapView>
        ) : (
          <ActivityIndicator size="small" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
