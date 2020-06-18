import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Maps from "./components/Maps";
import axios from "axios";

export default class App extends Component {
  state = {
    loading: true,
    country: {},
  };

  componentDidMount() {
    this.getCountryStatus();
  }

  getCountryStatus = () => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res.data.Countries[30]);
        this.setState({
          loading: false,
          country: res.data.Countries[30],
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(this.state.country);
    const {
      Country,
      NewConfirmed,
      TotalConfirmed,
      Date,
      TotalRecovered,
    } = this.state.country;
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.titleText}>Covid Diary</Text> */}
        {/* <Text style={styles.titleText}>
          {Country}
          <Text style={styles.innerText}> {Date}</Text>
        </Text>
        <Text style={styles.titleText}>
          New Confirmed Cases{" "}
          <Text style={styles.innerText}>{NewConfirmed}</Text>
        </Text>
        <Text style={styles.titleText}>
          Total Confirmed Cases{" "}
          <Text style={styles.innerText}>{TotalConfirmed}</Text>
        </Text>
        <Text style={styles.titleText}>
          <Text style={styles.innerText}>{TotalRecovered}</Text> Recovered
        </Text> */}
        <Maps />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16161a",
  },
  titleText: {
    fontSize: 20,
    margin: 10,
    color: "#272343",
    padding: 16,
    fontWeight: "bold",
    backgroundColor: "#e3f6f5",
  },
  innerText: {
    color: "#ffd803",
  },
});
