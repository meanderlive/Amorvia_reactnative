import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {MediumText, RegularText} from './MyText';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';

type Props = {
  text: string;
  loading?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const PrimaryBtn = ({
  text,
  loading,
  onPress,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            // marginHorizontal: 20,
            height: 55,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
          },
          containerStyle,
        ]}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'#FFF'} />
        ) : (
          <RegularText style={[{color: '#fff'}, textStyle]} bold>
            {text}
          </RegularText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;
