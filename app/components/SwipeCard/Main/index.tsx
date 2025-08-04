import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, PanResponder, View} from 'react-native';
import Card from '../Card';
import Footer from '../Footer';
import {ACTION_OFFSET, CARD} from '../utils/constants';
import {persons as personsArray} from './data';
import {styles} from './styles';
import {COLORS} from '../../../styles';
const {width} = Dimensions.get('screen');

export default function Main() {
  const [persons, setPersons] = useState(personsArray);
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!persons.length) {
      setPersons(personsArray);
    }
  }, [persons]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy, y0}) => {
      swipe.setValue({x: dx, y: dy});
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (dy <= -150) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: dx,
            y: -(direction * CARD.OUT_OF_SCREEN),
          },
          useNativeDriver: true,
        }).start(removeTopCard);
        return;
      }
      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = useCallback(() => {
    setPersons(prevState => prevState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handleChoice = useCallback(
    (direction: any) => {
      console.log(direction, '-->> directino');
      if (direction === 0) {
        Animated.timing(swipe.y, {
          toValue: -2 * CARD.OUT_OF_SCREEN,
          duration: 900,
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.timing(swipe.x, {
          toValue: direction * CARD.OUT_OF_SCREEN,
          duration: 900,
          useNativeDriver: true,
        }).start(removeTopCard);
      }
    },
    [removeTopCard, swipe.x],
  );
  return (
    <View style={styles.container}>
      {persons.length ? (
        <View
          style={{
            width: width * 0.65,
            height: 30,
            backgroundColor: COLORS.primary,
            position: 'absolute',
            top: 40,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            zIndex: -1,
          }}></View>
      ) : null}
      {persons.length ? (
        <View
          style={{
            width: width * 0.55,
            height: 20,
            backgroundColor: COLORS.primary,
            opacity: 0.5,
            position: 'absolute',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            top: 25,
            zIndex: -2,
          }}></View>
      ) : null}

      {persons.length
        ? persons
            .map((item: any, index) => {
              const isFirst = index === 0;
              const dragHandlers = isFirst ? panResponder.panHandlers : {};

              return (
                <Card
                  id={item._id}
                  name={item.name}
                  source={item.source}
                  isFirst={isFirst}
                  swipe={swipe}
                  tiltSign={tiltSign}
                  {...dragHandlers}
                />
              );
            })
            .reverse()
        : null}
      {persons.length ? <Footer handleChoice={handleChoice} /> : null}
    </View>
  );
}
