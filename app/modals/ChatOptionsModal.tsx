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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChatStackParams} from '../navigation/types';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const ChatOptionsModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={{width, height, backgroundColor: 'transparent'}}>
          <View
            style={{
              width: '50%',
              height: 230,
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: COLORS.white,
              alignSelf: 'flex-end',
              marginTop: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 5,
              right: 25,
              top: 30,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ScheduleDate')}
              style={styles.row}>
              <AntDesign name="infocirlce" size={17} color="black" />
              <RegularText>Schedule Date</RegularText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
              <AntDesign name="questioncircle" size={17} color="black" />
              <RegularText>Compatibility</RegularText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                size={20}
                color="black"
              />
              <RegularText style={{marginLeft: -5}}>
                Track Mildstone
              </RegularText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
              <MaterialIcons name="block" size={17} color={COLORS.black} />
              <RegularText>Block</RegularText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
              <FontAwesome name="flag" size={20} color="black" />
              <RegularText style={{marginLeft: -5}}>Report</RegularText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ChatOptionsModal;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    gap: 25,
  },
});
