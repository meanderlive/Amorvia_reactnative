import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText} from '../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const BlockedUsersOptionsModal = ({onHide}: Props) => {
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={{width, height, backgroundColor: 'transparent'}}>
          <View
            style={{
              width: '25%',
              height: 70,
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: COLORS.white,
              alignSelf: 'flex-end',
              marginTop: 30,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 5,
              marginRight: 15,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
                flexDirection: 'row',
                height: 30,
                marginTop: 3,
              }}>
              <RegularText style={{color: 'black', fontSize: 13}}>
                Unblock
              </RegularText>
              <MaterialIcons name="block" size={17} color={COLORS.black} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
                flexDirection: 'row',
                height: 30,
              }}>
              <RegularText style={{color: 'black', fontSize: 13}}>
                Delete
              </RegularText>
              <AntDesign name="delete" size={17} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BlockedUsersOptionsModal;

const styles = StyleSheet.create({});
