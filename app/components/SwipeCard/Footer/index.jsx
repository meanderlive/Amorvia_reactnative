import React from 'react';
import {View} from 'react-native';

import RoundButton from '../RoundButton';
import {styles} from './styles';
import { COLORS } from '../../../styles';
export default function Footer({handleChoice}) {
  return (
    <View style={[styles.container, {gap: 60}]}>
      <RoundButton
        name="close"
        size={38}
        color={'#FA294D'}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton 
        name="staro"
        size={24}
        color={'#AD63FF'}
        onPress={() => handleChoice(0)}
      />
      <RoundButton
        name="hearto"
        size={25}
        color={COLORS.primary}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
}
