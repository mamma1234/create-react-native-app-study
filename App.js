import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    height: 50,
    backgroundColor: 'steelblue',
  }
});

export default class AppView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </SafeAreaView>
    );
  }
}