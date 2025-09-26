import { View, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import MainLayout from '../../../components/MainLayout';
import { MediumText, RegularTextG } from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import ImagePickerModal from '../../../modals/ImagePickerModal';

const SubmitIdScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'SubmitId'>>();
  const route = useRoute<RouteProp<RootStackParams, 'SubmitId'>>();

  //@ts-ignore
  const { fullPayload } = route.params;

  const [image, setImage] = useState<any>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleImageSelect = (img: any) => {
    if (!img) {
      console.log('No image selected');
      return;
    }
    setImage(img);
    setShowPicker(false);
    console.log('Selected ID Image:', img);
  };

  const handleSubmit = () => {
    if (!image) {
      Alert.alert('ID Proof Required', 'Please select an ID proof before submitting.');
      return;
    }

    // Add idProof to the fullPayload
    const updatedPayload = {
      ...fullPayload,
      idProof: {
        uri: image.uri,
        fileName: image.fileName || 'id-proof.jpg',
        type: image.type || 'image/jpeg',
      },
    };

    console.log('Final Payload with ID:', updatedPayload);

    // Navigate to next screen with the updated payload
    navigation.navigate('IdUploaded', {
      fullPayload: updatedPayload,
    });
  };

  return (
    <MainLayout onBack={navigation.goBack}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ height: 170, width: '100%' }}>
          {image ? (
            <Image
              source={{ uri: image.uri }}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            />
          ) : (
            <Image
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              source={require('../../../../assets/images/IdCard.png')}
            />
          )}
        </View>

        <View style={{ alignItems: 'center', marginVertical: 25 }}>
          <MediumText>Upload a scanned copy of a</MediumText>
          <MediumText style={{ marginBottom: 15 }}>Govt. issued ID</MediumText>
          <RegularTextG>Eg: Passport, Driving Licence, Voter/Tax Id etc.</RegularTextG>
        </View>

        <PrimaryBtn
          onPress={() => setShowPicker(true)}
          containerStyle={{ marginVertical: 10 }}
          text={image ? 'Change ID Proof' : 'Pick ID Proof'}
        />

        <PrimaryBtn
          onPress={handleSubmit}
          containerStyle={{ marginVertical: 10 }}
          text="Submit Proof"
        />

        {showPicker && (
          <ImagePickerModal
            onHide={() => setShowPicker(false)}
            onImageSelect={handleImageSelect}
          />
        )}
      </View>
    </MainLayout>
  );
};

export default SubmitIdScreen;
