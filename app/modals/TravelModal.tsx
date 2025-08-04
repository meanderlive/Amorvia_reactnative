import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {MediumText, RegularText, SmallText} from '../components/MyText';
import CylinderSvg from '../../assets/images/svg/Cylinder.svg';
import PrimaryBtn from '../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../navigation/types';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const TravelModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '85%',
              height: 330,
              borderRadius: 15,
              overflow: 'hidden',
              backgroundColor: COLORS.white,
              marginBottom: 50,
              padding: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <CylinderSvg style={{marginVertical: 15}} />
              <MediumText style={{fontSize: 20, marginBottom: 5}}>
                Get Travel ready
              </MediumText>

              <SmallText style={{color: 'gray', fontSize: 13}}>
                Use Travel mode to change your
              </SmallText>
              <SmallText style={{color: 'gray', fontSize: 13}}>
                location to wherever you’re going, as
              </SmallText>
              <SmallText
                style={{color: 'gray', fontSize: 13, marginBottom: 20}}>
                often as you like
              </SmallText>
            </View>
            <PrimaryBtn
              onPress={() => {
                navigation.navigate('TravelMode'), onHide;
              }}
              text="Use Travel Mode"
              textStyle={{fontSize: 15}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TravelModal;

const styles = StyleSheet.create({});
