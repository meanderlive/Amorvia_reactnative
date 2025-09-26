import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { BigText, MediumText, RegularTextG } from '../../../components/MyText';

const AlmostDoneMat = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'AlmostDoneMat'>>();
  const route = useRoute<RouteProp<RootStackParams, 'AlmostDoneMat'>>();

  console.log('🚩 Route params:', route.params);
  console.log('🚩 Route name:', route.name);

  //@ts-ignore
  const { fullPayload } = route.params;

  return (
    <MainLayout
      onBack={navigation.goBack}
      rightSideIcon={() => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('FamilyDetail', {
              fullPayload, // Forward the same combined payload
            })
          }
        >
          <RegularTextG>Skip</RegularTextG>
        </TouchableOpacity>
      )}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginHorizontal: 18, gap: 10 }}>
          <BigText style={{ textAlign: 'center', fontSize: 22 }}>
            You are almost done
          </BigText>
          <MediumText style={{ marginTop: 15 }}>About yourself</MediumText>
          <Text style={{ fontSize: 14 }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </Text>
        </View>

        <PrimaryBtn
          onPress={() =>
            navigation.navigate('FamilyDetail', {
              fullPayload, // Forward the same combined payload
            })
          }
          text="Create Profile"
          containerStyle={{ marginBottom: 40, marginHorizontal: 20 }}
        />
      </View>
    </MainLayout>
  );
};

export default AlmostDoneMat;
