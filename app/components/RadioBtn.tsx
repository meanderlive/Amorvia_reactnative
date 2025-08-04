import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';

const RadioBtn = ({
  bool,
  size,
  onPress,
}: {
  onPress?: () => void;
  bool?: boolean;
  size?: number;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={{
        width: size ? size : 18,
        height: size ? size : 18,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: size ? size / 2 : 10,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {bool && (
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: size ? size - 6 : 18 - 6,
            height: size ? size - 6 : 18 - 6,
            borderRadius: size ? size / 2 : 18,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default RadioBtn;
