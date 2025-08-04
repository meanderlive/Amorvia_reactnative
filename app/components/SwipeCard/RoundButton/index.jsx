import React, { useCallback, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import  AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

export default function RoundButton({ name, size, color, onPress }) {
  const scale = useRef(new Animated.Value(1.2)).current;

  const animateScale = useCallback(
    (newValue) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale]
  );

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScale(1);
        onPress();
      }}
      delayPressOut={110}
    >
      <Animated.View style={[styles.container, {marginBottom: name ==='staro' ? 20: 0}, { transform: [{ scale }] }]}>
       <AntDesign name={name }size={30} color={color}/>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
