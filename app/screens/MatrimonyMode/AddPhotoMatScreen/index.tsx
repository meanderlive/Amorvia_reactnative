
import {Image, ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RegularText} from '../../../components/MyText';
import AddBtn from '../../../components/AddBtn';
import ImagePickerModal from '../../../modals/ImagePickerModal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../styles';

const ImagePlaceholder = ({onImageSelect, image}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return image ? (
    <Image
      source={{ uri: image?.uri || image?.assets?.[0]?.uri }} // ✅ safer
      style={styles.image}
    />
  ) : (
    <View style={styles.placeholder}>
      {isModalOpen && (
        <ImagePickerModal
          onImageSelect={onImageSelect}
          onHide={() => setIsModalOpen(false)}
        />
      )}
      <RegularText style={styles.placeholderText}>Add more</RegularText>
      <AddBtn onPress={() => setIsModalOpen(true)} />
    </View>
  );
};

const AddPhotoMatScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute();
  // @ts-ignore
  const { interests } = route.params || { interests: [] };

  const [selectedImages, setSelectedImages] = useState<any[]>([null, null, null, null]);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const validImages = selectedImages.filter(img => img !== null);

    if (validImages.length < 2) {
      Alert.alert('Upload Required', 'Please add at least 2 photos to continue.');
      return;
    }

    console.log('✅ Selected interests:', interests);
    console.log('✅ Selected images:', validImages);

    // TODO: Call your api_AddInterest + photo upload API here
    navigation.navigate('LoginM');
  };

  return (
    <MainLayout title="Add Photos" onBack={navigation.goBack}>
      <ScrollView contentContainerStyle={styles.container}>
        <RegularText style={styles.subtitle}>It’s all About Presentation</RegularText>
        <RegularText style={styles.subtitle}>Add at least 2 Photos to Continue</RegularText>

        {/* Show selected interests for confirmation
        <View style={styles.interestsBox}>
          <Text style={styles.interestsTitle}>Your Interests:</Text>
          <Text style={styles.interestsList}>
            {interests && interests.length > 0 ? interests.join(', ') : 'None selected'}
          </Text>
        </View> */}

        {/* Image upload placeholders */}
        <View style={styles.row}>
          <ImagePlaceholder
            image={selectedImages[0]}
            onImageSelect={(imageObj: any) => {
              const newList = [...selectedImages];
              newList[0] = imageObj;
              setSelectedImages(newList);
            }}
          />
          <ImagePlaceholder
            image={selectedImages[1]}
            onImageSelect={(imageObj: any) => {
              const newList = [...selectedImages];
              newList[1] = imageObj;
              setSelectedImages(newList);
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryBtn text={'Continue'} onPress={handleSubmit} />
      </View>
    </MainLayout>
  );
};

export default AddPhotoMatScreen;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  subtitle: {color: COLORS.grey, marginTop: 5},
  interestsBox: {marginVertical: 10},
  interestsTitle: {color: COLORS.primary, fontWeight: 'bold'},
  interestsList: {color: 'black'},
  row: {
    flexDirection: 'row',
    marginVertical: 20,
    gap: 30,
    marginHorizontal: 10,
  },
  placeholder: {
    flex: 1,
    height: 180,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {color: 'gray', marginBottom: 20},
  image: {
    flex: 1,
    height: 180,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  footer: {marginBottom: 20, marginHorizontal: 20},
});
