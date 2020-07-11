import React, { Component } from "react";

import { StyleSheet, Text, SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import Maps from "./components/Maps";
import axios from "axios";

export default class App extends Component {
  state = {
    loading: true,
    country: {},
    search: "",
  };

  componentDidMount() {
    this.getCountryStatus();
  }

  getCountryStatus = () => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
          round
          autoCorrect={false}
        /> */}
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
