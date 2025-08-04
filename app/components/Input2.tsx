import {View, TextInput, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {RegularText} from './MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';

type InputProps = {
  onPress?: () => void;
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

const Input2 = ({
  onPress,
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
    <View style={[{width: '100%'}, inputWrapperStyle, {marginBottom: 20}]}>
      <RegularText style={[labelStyle, {fontSize: 17}]}>{label}</RegularText>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          alignItems: 'center',
        }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          style={[
            {
              paddingVertical: 10,
              marginBottom: 10,
              color: 'gray',
              paddingLeft: -10,
              fontSize: 15,
            },
            inputStyle,
          ]}
        />
        <AntDesign onPress={onPress} size={15} name="down" color={'gray'} />
      </View>
    </View>
  );
};

export default Input2;
