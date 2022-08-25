import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = () => {
  const img = {
    uri: 'https://s3-alpha-sig.figma.com/img/51df/6e74/455e4e91f026bae88e5688a38ff59567?Expires=1662336000&Signature=aAXzR1J7Lus82vilSTL0vzAa7jpY0KKx-nE1bMF6zp5eJEy56in38tPBKuQZ~NXiwJjMvH-Szh5AM~BJxnpPV6gOGqg9Uwyy6cjSiRooTvUw2Vpz4PbuGlV5q~D9~jCSeXNbAmIzp5j~J6Ts5yizikFlcu-BN7t624BpRgzQeTYMF9wH6si8yXQremvREwUhr9T3o09eb5nnPZlEI1-~75vxVOKiD6GCoAt4f8NkMwvPe~GWZlRRUFaJ4VdUNCdW7VQ996GaDQLSuQVrmScv~dXaA~Q8gN4i8P5kbA5Ttb2QJ7KK08Vpvv~spMpIhRKpTwIFdknkqeN1oUY317eOLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  };
  return (
    <View style={style.container}>
      <ImageBackground
        source={img}
        style={style.image}
        imageStyle={style.imageView}>
        <View style={style.calificationView}>
          <Icon name="star" size={15} color="#EEBA00" />
          <Text style={style.calification}>4.7</Text>
        </View>
      </ImageBackground>
      <View style={style.infoSection}>
        <View style={style.titleView}>
          <Text style={style.title}>The Willows</Text>
        </View>
        <View style={style.directionView}>
          <Icon name="location-on" size={25} color="black" />
          <Text style={style.direction}>3517 W. Gray St. Utica</Text>
        </View>

        <Text style={style.title}>This is a Card</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5FDFF',
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  calification: {
    color: '#7A6229',
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
  },
  calificationView: {
    backgroundColor: '#FBEDB7',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: '20%',
    alignItems: 'center',
    borderRadius: 7,
  },
  title: {
    color: '#151525',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  titleView: {
    paddingBottom: 5,
  },
  direction: {
    color: '#737373',
  },
  directionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 85,
    height: 90,
    flexDirection: 'column-reverse',
  },
  imageView: {
    borderRadius: 10,
  },
  infoSection: {
    paddingLeft: 20,
  },
});

export default Card;
