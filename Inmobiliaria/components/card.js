import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faBed} from '@fortawesome/free-solid-svg-icons/faBed';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {faBath} from '@fortawesome/free-solid-svg-icons/faBath';
import {faVectorSquare} from '@fortawesome/free-solid-svg-icons/faVectorSquare';

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
          <FontAwesomeIcon icon={faStar} color={'#EEBA00'} />
          <Text style={style.calification}>4.7</Text>
        </View>
      </ImageBackground>
      <View style={style.infoSection}>
        <View style={style.titleView}>
          <Text style={style.title}>The Willows</Text>
        </View>
        <View style={style.directionView}>
          <FontAwesomeIcon icon={faLocationDot} color={'black'} />
          <Text style={style.direction}>3517 W. Gray St. Utica</Text>
        </View>
        <View style={style.detailsView}>
          <FontAwesomeIcon icon={faBed} color={'grey'} />
          <Text style={style.direction}>3</Text>
          <FontAwesomeIcon icon={faBath} color={'grey'} />
          <Text style={style.direction}>5</Text>
          <FontAwesomeIcon icon={faVectorSquare} color={'grey'} />
          <Text style={style.direction}>351 ft2</Text>
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
    fontWeight: '800',
    fontSize: 12,
  },
  calificationView: {
    backgroundColor: '#FBEDB7',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: '20%',
    alignItems: 'center',
    borderRadius: 7,
    marginVertical: 10,
  },
  title: {
    color: '#151525',
    fontWeight: '600',
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
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
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
