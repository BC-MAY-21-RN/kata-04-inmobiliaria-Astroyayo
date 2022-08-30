import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faBed} from '@fortawesome/free-solid-svg-icons/faBed';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {faBath} from '@fortawesome/free-solid-svg-icons/faBath';
import {faVectorSquare} from '@fortawesome/free-solid-svg-icons/faVectorSquare';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons/faHeartCirclePlus';

const Card = ({apartment}) => {
  return (
    <View style={style.container}>
      <View style={style.cardView}>
        <ImageBackground
          source={{uri: apartment.img}}
          style={style.image}
          imageStyle={style.imageView}>
          <View style={style.calificationView}>
            <FontAwesomeIcon icon={faStar} color={'#EEBA00'} />
            <Text style={style.calification}>{apartment.calification}</Text>
          </View>
        </ImageBackground>

        <View style={style.infoSection}>
          <View style={style.titleView}>
            <Text style={style.title}>{apartment.title}</Text>
          </View>
          <View style={style.directionView}>
            <FontAwesomeIcon icon={faLocationDot} color={'black'} />
            <Text style={style.direction}>{apartment.location}</Text>
          </View>
          <View style={style.detailsView}>
            <FontAwesomeIcon icon={faBed} color={'#747783'} />
            <Text style={style.details}>{apartment.rooms}</Text>
            <FontAwesomeIcon icon={faBath} color={'#747783'} />
            <Text style={style.details}>{apartment.bathrooms}</Text>
            <FontAwesomeIcon icon={faVectorSquare} color={'#747783'} />
            <Text style={style.details}>{apartment.area}</Text>
          </View>
          <View style={style.priceView}>
            <Text style={style.price}>{apartment.price}</Text>
            <FontAwesomeIcon icon={faHeartCirclePlus} color={'#00B074'} />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5FDFF',
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  cardView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 18,
  },
  titleView: {
    paddingBottom: 5,
  },
  direction: {
    color: '#737373',
    fontSize: 15,
    paddingLeft: 8,
  },
  directionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    color: 'black',
    fontSize: 15,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  priceView: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 105,
    height: 110,
    flexDirection: 'column-reverse',
  },
  imageView: {
    borderRadius: 10,
  },
  infoSection: {
    width: '60%',
  },
});

export default Card;
