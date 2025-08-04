import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {RegularText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../styles';

const InfoView = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 15,
          paddingHorizontal: 15,
          gap: 10,
        }}>
        <AntDesign name="questioncircleo" size={24} color={COLORS.primary} />
        <RegularText style={{color: COLORS.primary}}>
          Check Compatibility
        </RegularText>
      </TouchableOpacity>
    </View>
  );
};

export default InfoView;
