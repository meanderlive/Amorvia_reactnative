import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MatProfileStackParams} from '../../../navigation/types';
import {BigText, MediumText, RegularText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import HideAccountPopup from '../../../components/popups/HideAccountPopup';

const HideProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MatProfileStackParams>>();
  const [hideAcPopupVisible, setHideAcPopupVisible] = useState(false);

  const [view, setView] = useState(1);

  return (
    <View style={{flex: 1}}>
      <HideAccountPopup
        visible={hideAcPopupVisible}
        onCancel={() => setHideAcPopupVisible(false)}
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
            Hide Profile
          </BigText>
          <Text style={{color: 'white', fontSize: 16}}>
            Hiding your profile will make it invisible
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <MediumText>How long would like to hide your profile for ?</MediumText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setView(1);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 1 ? COLORS.primary : 'black',
                backgroundColor: view === 1 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 1 ? 'white' : 'gray'}}>
              1 Week
            </RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setView(2);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 2 ? COLORS.primary : 'gray',
                backgroundColor: view === 2 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 2 ? 'white' : 'black'}}>
              2 Weeks
            </RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setView(3);
            }}
            style={[
              styles.size,
              {
                borderColor: view === 3 ? COLORS.primary : 'gray',
                backgroundColor: view === 3 ? COLORS.primary : 'transparent',
              },
            ]}>
            <RegularText style={{color: view === 3 ? 'white' : 'black'}}>
              1 Month
            </RegularText>
          </TouchableOpacity>
        </View>

        <PrimaryBtn
          onPress={() => setHideAcPopupVisible(true)}
          text="Hide my profile"
        />
      </View>
    </View>
  );
};

export default HideProfileScreen;
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
    paddingVertical: 30,
  },
  size: {
    borderRadius: 69,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
