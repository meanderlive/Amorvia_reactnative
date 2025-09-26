import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Text,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import { BigText, RegularText, SmallText } from '../../components/MyText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/types';
import { COLORS } from '../../styles';
// ==> images
import HeartSvg from '../../../assets/images/svg/heart.svg';
import LoginSvg from '../../../assets/images/svg/login.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { AppMode } from '../../constants';
import { changeAppMode } from '../../redux/feature/auth/authSlice';
import { api_getModeByID } from '../../api/mode';

const ModeSelectScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (selectedMode: keyof typeof AppMode) => {
    console.log('handleSubmit called with mode:', selectedMode);
    setLoading(true);
    
    try {
      console.log('handleSubmit called with mode:', selectedMode);
      const modeInfo = AppMode[selectedMode];
      
      // Create mode data
      const modeData = {
        _id: modeInfo.id,
        name: modeInfo.name,
        description: `${modeInfo.name} Mode`
      };
      
      console.log('Mode data to store:', modeData);
      
      // Update mode in Redux
      await dispatch(changeAppMode(modeData));
      
      console.log('Mode updated in Redux, navigating...');
      
      // Navigate based on selected mode
      if (selectedMode === 'Dating') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else if (selectedMode === 'Matrimony') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'First' }],
        });
      }
      
    } catch (error) {
      console.log('Error in handleSubmit:', error);
      Alert.alert('Error', 'Failed to process mode selection');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <LoginSvg
          width={250}
          style={{
            marginTop: 20,
            marginHorizontal: '15%',
          }}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}
        >
          <HeartSvg width={45} height={45} />
        </View>

        <View>
          <BigText
            style={{ textAlign: 'center', fontSize: 28, color: 'black' }}
          >
            Choose Mode!
          </BigText>
          <SmallText
            style={{ textAlign: 'center', fontSize: 13, marginTop: 10 }}
          >
            Find like minded people to connect with.
          </SmallText>
          <SmallText style={{ textAlign: 'center', fontSize: 13 }}>
            See who you like and who likes you and connect with them
          </SmallText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => handleSubmit('Dating')}
            style={styles.btn}
            disabled={loading}
          >
            <RegularText style={{ color: 'white' }}>Dating</RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSubmit('Matrimony')}
            style={styles.btn}
            disabled={loading}
          >
            <RegularText style={{ color: 'white' }}>Matrimony</RegularText>
          </TouchableOpacity>
        </View>
        
      
      </ScrollView>
    </MainLayout>
  );
};

export default ModeSelectScreen;

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 50,
  },
});
