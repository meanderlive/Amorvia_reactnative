import LinearGradient from 'react-native-linear-gradient';
import React, {useCallback} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Choice from '../Choice';
import {ACTION_OFFSET} from '../utils/constants';
import LikeSvg from '../assets/like.svg';
import MaybeSvg from '../assets/maybe.svg';
import CrossSvg from '../assets/cross.svg';
import {styles} from './styles';
import InfoBox from '../InfoBox';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

export default function Card({
  id,
  name,
  source,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}) {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const maybeOpacity = swipe.y.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            // styles.choiceContainer,
            // styles.likeContainer,
            {
              width: 100,
              position: 'absolute',
              top: 150,
              left: 125,
              transform: [{translateX: -50}, {rotate: '-21deg'}],
              height: 100,
            },
            {opacity: likeOpacity},
          ]}>
          {/* <Choice type="like" /> */}
          <LikeSvg />
        </Animated.View>
        <Animated.View
          style={[
            // styles.choiceContainer,
            // styles.maybeContainer,
            {
              width: 100,
              position: 'absolute',
              top: 150,
              left: 125,
              transform: [{translateX: -50}],
              height: 100,
            },
            {opacity: maybeOpacity},
          ]}>
          {/* <Choice type="maybe" /> */}
          <MaybeSvg />
        </Animated.View>
        <Animated.View
          style={[
            // styles.choiceContainer,
            // styles.nopeContainer,
            {
              width: 100,
              position: 'absolute',
              top: 150,
              left: 125,
              transform: [{translateX: -50}, {rotate: '30deg'}],
              height: 100,
            },
            {opacity: nopeOpacity},
          ]}>
          {/* <Choice type="nope" /> */}
          <CrossSvg />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}>
      <View
        style={{
          height: 600,
          width: 420,
          backgroundColor: 'transparent',
          alignItems: 'center',
          // alignItems: 'flex-end',
        }}>
        <Image source={source} style={styles.image} />
        <InfoBox isFirst={isFirst} name={name} />
        {/* <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradient}
        /> */}
      </View>
      {isFirst && renderChoice()}
    </Animated.View>
  );
}
