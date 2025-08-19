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
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const mode = useSelector((s: RootState) => s.auth.mode);
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = React.useState(false);

  const DatingId = '659436bcacc570d6b14edf41';
  const MaterimonyId = '65943637acc570d6b14edf38';

  const handleSubmit = async (selectedMode: string) => {
    console.log('handleSubmit called with mode:', selectedMode);
    setLoading(true);
    try {
      const Id = selectedMode === AppMode.Dating ? DatingId : MaterimonyId;
      console.log('Using ID:', Id);

      // Fetch mode data
      console.log('Calling API with ID:', Id);
      const res = await api_getModeByID(Id);
      console.log('Full API response:', JSON.stringify(res, null, 2));
      console.log('res.data type:', typeof res.data);
      console.log('res.data is array:', Array.isArray(res.data));
      console.log('res.data length:', res.data?.length);
      console.log('Mode data to store:', res.data);

      // Update mode in Redux with the full mode data
      // Check if res.data is an array and take the first element
      const modeData = Array.isArray(res.data) ? res.data[0] : res.data;
      console.log('Extracted modeData:', JSON.stringify(modeData, null, 2));
      dispatch(changeAppMode(modeData));
      console.log('changeAppMode dispatched with data:', modeData);

      // Navigate based on selected mode
      if (selectedMode === AppMode.Dating) {
        navigation.navigate('Login'); // Navigate to Login for Dating
      } else if (selectedMode === AppMode.Matrimony) {
        navigation.navigate('First'); // Navigate to First for Matrimony
      }
    } catch (error) {
      console.log('Error in handleSubmit:', error);
      Alert.alert('Error', 'Something went wrong');
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
            onPress={() => handleSubmit(AppMode.Dating)}
            style={styles.btn}
            disabled={loading}
          >
            <RegularText style={{ color: 'white' }}>
              {loading ? 'Loading...' : 'Dating'}
            </RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSubmit(AppMode.Matrimony)}
            style={styles.btn}
            disabled={loading}
          >
            <RegularText style={{ color: 'white' }}>
              {loading ? 'Loading...' : 'Matrimony'}
            </RegularText>
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
