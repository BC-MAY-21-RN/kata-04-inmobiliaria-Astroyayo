import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Card from './card';

const CardList = ({apartmentList}) => {
  const renderItem = ({item}) => {
    return <Card apartment={item} />;
  };

  return (
    <View style={style.container}>
      <FlatList data={apartmentList} renderItem={renderItem} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 'auto',
  },
});

export default CardList;
