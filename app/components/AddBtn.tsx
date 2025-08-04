import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  size?: number;
  onPress?: () => void;
  containerStyles?: StyleProp<ViewStyle>;
};

const AddBtn = ({onPress, size, containerStyles}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 32,
          width: 32,
          backgroundColor: COLORS.primary,
          borderRadius: 35,
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyles,
      ]}>
      <AntDesign name="plus" size={16} color={COLORS.white} />
    </TouchableOpacity>
  );
};

export default AddBtn;
