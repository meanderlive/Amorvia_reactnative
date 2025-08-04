import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import {BigText, MediumText, RegularText} from '../../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteAccountPopup from '../../../components/popups/DeleteAccountPopup';

const DeleteProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  const [deleteAcPopupVisible, setDeleteAcPopupVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <DeleteAccountPopup
        visible={deleteAcPopupVisible}
        onCancel={() => setDeleteAcPopupVisible(false)}
      />
      <View style={{height: 360}}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../../../../assets/images/BgImg.png')}
        />
        <View style={styles.header}>
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={30}
            color={COLORS.white}
          />

          <BigText style={{color: 'white', marginTop: 40, marginBottom: 10}}>
            Why do you want to delete your profile ?
          </BigText>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setDeleteAcPopupVisible(true)}
          style={styles.row}>
          <View style={styles.icon}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/images/MImg.png')}
            />
          </View>
          <View style={styles.row2}>
            <RegularText>Found my match on Marier.com</RegularText>
            <AntDesign size={15} name="right" color={'gray'} />
          </View>
        </TouchableOpacity>

        {/* {} */}
        <TouchableOpacity
          onPress={() => setDeleteAcPopupVisible(true)}
          style={styles.row}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="ring" size={24} color="white" />
          </View>
          <View style={styles.row2}>
            <RegularText>Found my match elsewhere</RegularText>
            <AntDesign size={15} name="right" color={'gray'} />
          </View>
        </TouchableOpacity>

        {/* {} */}
        <TouchableOpacity
          onPress={() => setDeleteAcPopupVisible(true)}
          style={styles.row}>
          <View style={[styles.icon, {backgroundColor: '#79BFFE'}]}>
            <FontAwesome name="coffee" size={18} color="white" />
          </View>
          <View style={styles.row2}>
            <RegularText>Taking a break</RegularText>
            <AntDesign size={15} name="right" color={'gray'} />
          </View>
        </TouchableOpacity>

        {/* {} */}
        <TouchableOpacity
          onPress={() => setDeleteAcPopupVisible(true)}
          style={styles.row}>
          <View style={[styles.icon, {backgroundColor: '#A78CD7'}]}>
            <MaterialCommunityIcons
              name="emoticon-sad-outline"
              size={24}
              color="white"
            />
          </View>
          <View style={styles.row2}>
            <RegularText>Found my match on Marier.com</RegularText>
            <AntDesign size={15} name="right" color={'gray'} />
          </View>
        </TouchableOpacity>

        {/* {} */}
        <TouchableOpacity
          onPress={() => setDeleteAcPopupVisible(true)}
          style={styles.row}>
          <View style={[styles.icon, {backgroundColor: '#FCA850'}]}>
            <AntDesign name="question" size={24} color="white" />
          </View>
          <View style={styles.row2}>
            <RegularText>Found my match on Marier.com</RegularText>
            <AntDesign size={15} name="right" color={'gray'} />
          </View>
        </TouchableOpacity>

        {/* {} */}
      </View>
    </View>
  );
};

export default DeleteProfileScreen;
const styles = StyleSheet.create({
  header: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    padding: 20,
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
    marginTop: -130,
    alignSelf: 'center',
    padding: 15,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flex: 1,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
