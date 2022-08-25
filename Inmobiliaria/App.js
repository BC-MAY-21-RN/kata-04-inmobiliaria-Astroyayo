/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from './components/';

const App = () => {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
