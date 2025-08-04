import {
  View,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText} from '../components/MyText';
import LinearGradient from 'react-native-linear-gradient';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const {height, width} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
  onImageSelect?: any;
};

const ImagePickerModal = ({onHide, onImageSelect}: Props) => {
  const handleOpenCamera = async () => {
    try {
      const res = await launchCamera({mediaType: 'photo'});
      console.log(res);
      onImageSelect(res?.assets[0]);
    } catch (err) {
      console.log(err);
    }
  };
  const handleOpenGallery = async () => {
    try {
      const res = await launchImageLibrary({mediaType: 'photo'});
      console.log(res);
      onImageSelect(res?.assets[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            height,
            width,
            backgroundColor: 'rgba(0,0,0,0.6)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: 200,
              borderRadius: 15,
              overflow: 'hidden',
              backgroundColor: COLORS.white,
            }}>
            <TouchableOpacity
              onPress={handleOpenCamera}
              style={{
                flex: 1,
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
              }}>
              <RegularText style={{color: COLORS.grey, fontSize: 18}}>
                Take Photo
              </RegularText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleOpenGallery}
              style={{
                flex: 1,
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
              }}>
              <RegularText style={{color: COLORS.grey, fontSize: 18}}>
                ChooseFrom Gallery
              </RegularText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onHide}
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.primary,
                }}>
                <RegularText bold style={{color: COLORS.white, fontSize: 18}}>
                  Cancel
                </RegularText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ImagePickerModal;
