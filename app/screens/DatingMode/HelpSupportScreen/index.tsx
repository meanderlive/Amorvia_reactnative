import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {MediumText, RegularText} from '../../../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../styles';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import HelpSvg from '../../../../assets/images/svg/help.svg';

const HelpSupportScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout onBack={navigation.goBack} title="Request Help">
      <ScrollView>
        <View
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <HelpSvg />
        </View>
        <MediumText
          bold
          style={{
            textAlign: 'center',
            marginTop: 30,
            fontSize: 20,
            marginBottom: 10,
          }}>
          How can we help?
        </MediumText>
        <MediumText
          style={{
            textAlign: 'center',
            color: COLORS.grey,
            marginHorizontal: 25,
          }}>
          It looks like you are experiencing problems with our App. We are here
          to help so please get in touch with us.
        </MediumText>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <TouchableOpacity style={styles.container}>
            <MaterialCommunityIcons
              name="chat-processing"
              size={50}
              color={COLORS.primary}
            />
            <MediumText style={{color: COLORS.black}}>Chat to us</MediumText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container}>
            <MaterialIcons name="email" size={50} color={COLORS.primary} />
            <MediumText style={{color: COLORS.black}}>Email us</MediumText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default HelpSupportScreen;
const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'rgba(0,0,0,0.05)',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
