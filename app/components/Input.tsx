import {View, TextInput, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {RegularText} from './MyText';

type InputProps = {
  placeholder: string;
  label: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onBlur?: any;
};
const Input = ({
  placeholder,
  label,
  inputStyle,
  inputWrapperStyle,
  labelStyle,
  value,
  onChangeText,
  secureTextEntry,
  onBlur,
}: InputProps) => {
  return (
    <View style={[{width: '100%'}, inputWrapperStyle, {marginBottom: 10}]}>
      <RegularText style={[labelStyle, {fontSize: 17}]}>{label}</RegularText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        style={[
          {
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
            paddingVertical: 10,
            marginBottom: 10,
            color: 'gray',
            paddingLeft: -10,
            fontSize: 14,
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input;
