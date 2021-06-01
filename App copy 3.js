import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#000',
  }
});

const data = [
  {
    name: 'item1',
    price: '$100'
  },
  {
    name: 'item2',
    price: '$120'
  },
  {
    name: 'item3',
    price: '$130'
  },
  {
    name: 'item4',
    price: '$200'
  },
  {
    name: 'item5',
    price: '$500'
  }
]
export default class AppView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {
            data.map((item, index) => (
              <View 
                style={[
                  styles.item,
                  (index === 0) && { borderTopWidth: 0 }, // CSS: first-child
                  (index % 2 === 1) && { backgroundColor: '#eee' } // CSS: nth-child(even)
              ]}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            ))
          }
        </View>
      </SafeAreaView>
    );
  }
}
