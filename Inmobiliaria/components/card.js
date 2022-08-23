import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = () => {
  const img = {
    uri: 'https://s3-alpha-sig.figma.com/img/51df/6e74/455e4e91f026bae88e5688a38ff59567?Expires=1662336000&Signature=aAXzR1J7Lus82vilSTL0vzAa7jpY0KKx-nE1bMF6zp5eJEy56in38tPBKuQZ~NXiwJjMvH-Szh5AM~BJxnpPV6gOGqg9Uwyy6cjSiRooTvUw2Vpz4PbuGlV5q~D9~jCSeXNbAmIzp5j~J6Ts5yizikFlcu-BN7t624BpRgzQeTYMF9wH6si8yXQremvREwUhr9T3o09eb5nnPZlEI1-~75vxVOKiD6GCoAt4f8NkMwvPe~GWZlRRUFaJ4VdUNCdW7VQ996GaDQLSuQVrmScv~dXaA~Q8gN4i8P5kbA5Ttb2QJ7KK08Vpvv~spMpIhRKpTwIFdknkqeN1oUY317eOLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  };
  return (
    <View style={style.container}>
      <Image source={img} style={style.image} />
      <Text style={style.title}>This is a Card</Text>
      <Text>This is a Card</Text>
      <Text>This is a Card</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5FDFF',
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
  },
  title: {
    color: '#151525',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default Card;
