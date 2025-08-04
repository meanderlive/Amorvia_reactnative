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
import {RegularText, RegularTextG} from '../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {onShare} from '../utils/helper';
import {SHEETS} from '../sheets/sheets';
import {SheetManager} from 'react-native-actions-sheet';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const ProfileOptionsModal2 = ({onHide}: Props) => {
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={{width, height, backgroundColor: 'transparent'}}>
          <View
            style={{
              width: '47%',
              height: 180,
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
              right: 30,
              top: 65,
            }}>
            <TouchableOpacity onPress={onShare} style={styles.row}>
              <MaterialCommunityIcons
                name="share-outline"
                size={24}
                color="gray"
              />
              <RegularTextG>Share</RegularTextG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <SimpleLineIcons name="user" size={17} color="gray" />
              <RegularTextG>Add to shortcut</RegularTextG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <MaterialIcons name="block" size={17} color={'gray'} />
              <RegularTextG>Block Profile</RegularTextG>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => SheetManager.show(SHEETS.ReportSheet)}
              style={styles.row}>
              <AntDesign name="delete" size={17} color={'gray'} />
              <RegularTextG>Report</RegularTextG>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProfileOptionsModal2;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
