import React, { Component } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Dimensions, SafeAreaView, View, Text } from "react-native";

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0452;
const { height, width } = Dimensions.get("window");

export default class Maps extends Component {
  state = {
    initialPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    markerPosition: {
      latitude: 0,
      longitude: 0,
    },
  };

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var lng = parseFloat(position.coords.longitude);

      var initialRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };

      this.setState({ initialPosition: initialRegion });
      this.setState({ markerPosition: initialRegion });
    });
    (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximunAge: 10000 };

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var lng = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      this.setState({ initialPosition: lastRegion });
      this.setState({ markerPosition: lastRegion });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    // console.log(this.state);
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          showsCompass={false}
          showsPointsOfInterest={false}
          region={this.state.initialPosition}
        >
          <Marker coordinate={this.state.markerPosition}>
            <Callout>
              <View>
                <Text>Current Location</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
