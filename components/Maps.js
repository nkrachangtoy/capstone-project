import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions, SafeAreaView, View, Text } from "react-native";

export default class Maps extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  componentDidMount() {
    this.getMapRegion();
  }

  getMapRegion = (region) => {
    this.setState({
      region: `${region}`,
    });
  };

  render() {
    console.log(this.state.region);
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          mapType="standard"
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={false}
          showsPointsOfInterest={false}
          getMapRegion={this.getMapRegion}
          region={this.state.region}
        >
          {/* <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          /> */}
        </MapView>
        <View>
          <Text>Latitude: </Text>
        </View>
      </SafeAreaView>
    );
  }
}

let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
