import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
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
      source={image}
      style={{
        flex: 1,
        height: 180,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
      }}
    />
  ) : (
    <View
      style={{
        flex: 1,
        height: 180,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isModalOpen && (
        <ImagePickerModal
          onImageSelect={onImageSelect}
          onHide={() => setIsModalOpen(false)}
        />
      )}
      <RegularText style={{color: 'gray', marginBottom: 20}}>
        Add more
      </RegularText>
      <AddBtn onPress={() => setIsModalOpen(true)} />
    </View>
  );
};

const AddPhotoScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  // const {user, accessToken} = useRoute<any>().params;
  const [selectedImages, setSelectedImages] = useState([
    null,
    null,
    null,
    null,
  ]);

  console.log(selectedImages);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // dispatch(setAuth({...user, token: accessToken}));
    navigation.navigate('Interest');
  };
  return (
    <MainLayout title="Add Photos" onBack={navigation.goBack}>
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: 20,
        }}>
        <RegularText
          style={{
            color: COLORS.grey,
          }}>{`It’s all About Presentation `}</RegularText>
        <RegularText
          style={{
            color: COLORS.grey,
          }}>{`Add atleast 2 Photos to Continue`}</RegularText>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            gap: 30,
            marginHorizontal: 10,
          }}>
          <ImagePlaceholder
            image={selectedImages[0]}
            onImageSelect={(imageObj: any) => {
              console.log('here', imageObj);
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
        {/* <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            gap: 30,
            marginHorizontal: 10,
          }}>
          <ImagePlaceholder
            image={selectedImages[2]}
            onImageSelect={(imageObj: any) => {
              const newList = [...selectedImages];
              newList[2] = imageObj;
              setSelectedImages(newList);
            }}
          />
          <ImagePlaceholder
            image={selectedImages[3]}
            onImageSelect={(imageObj: any) => {
              const newList = [...selectedImages];
              newList[3] = imageObj;
              setSelectedImages(newList);
            }}
          />
        </View> */}
      </ScrollView>

      <View style={{marginBottom: 20}}>
        <PrimaryBtn
          text={'Continue'}
          onPress={() => {
            handleSubmit();
          }}
          containerStyle={{marginHorizontal: 20}}
        />
      </View>
    </MainLayout>
  );
};

export default AddPhotoScreen;

const styles = StyleSheet.create({});
