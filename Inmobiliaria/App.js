/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardList} from './components/';

import * as data from './assets/data/data.json';

const App = () => {
  return (
    <View style={styles.container}>
      <CardList apartmentList={data.apartments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
