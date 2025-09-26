import { View, Image } from 'react-native';
import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import { MediumText, RegularTextG } from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IdUploadedScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'IdUploaded'>>();

  const route = useRoute<RouteProp<RootStackParams, 'IdUploaded'>>();

  //@ts-ignore
  const { fullPayload } = route.params;

  console.log('✅ fullPayload in IdUploadedScreen', fullPayload);
  console.log('✅ Full route params in IdUploadedScreen', route.params);

  return (
    <MainLayout onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* Success Image */}
        <View
          style={{
            height: 170,
            width: 210,
            alignSelf: 'center',
          }}
        >
          <AntDesign
            style={{ marginBottom: -30, zIndex: 1, alignSelf: 'flex-end' }}
            name="checkcircle"
            size={25}
            color="#82BA5E"
          />
          <Image
            style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            source={require('../../../../assets/images/IdCard.png')}
          />
        </View>

        {/* Success Text */}
        <View style={{ alignItems: 'center', marginVertical: 25 }}>
          <MediumText>Thank you for uploading</MediumText>
          <MediumText>your ID</MediumText>
          <RegularTextG style={{ marginVertical: 15 }}>
            We will notify you as soon as it is verified
          </RegularTextG>
          <RegularTextG>Please check your mail in a few hours</RegularTextG>
        </View>

        {/* Forward full payload to PartnerPref */}
        <PrimaryBtn
          onPress={() =>
            navigation.navigate('PartnerPref', {
              fullPayload,
            })
          }
          containerStyle={{ marginVertical: 10 }}
          text="Continue"
        />
      </View>
    </MainLayout>
  );
};

export default IdUploadedScreen;
