import {StyleSheet, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';

import {
  BigText,
  MediumText,
  RegularText,
  SmallText,
} from '../../../components/MyText';
import {View} from 'react-native';
import {COLORS} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import WelcomeDaterIllustration from '../../../../assets/images/svg/WelcomeDaterIllustration.svg';
import HeartSvg from '../../../../assets/logo/svg/heart.svg';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../redux/feature/auth/authSlice';

const {width} = Dimensions.get('screen');

type WelcomeScreenRouteProp = RouteProp<RootStackParams, 'Welcome'>;

const WelcomeScreen = () => {
  const route = useRoute<WelcomeScreenRouteProp>();
<<<<<<< Updated upstream
  const {res} = route.params;
  const userName = res.data.data.userName;
  const token = res.data.data.token;
=======
  const dispatch = useDispatch();
  const { finalPayload } = route.params;   // ✅ match what you send
  const user = finalPayload;

  React.useEffect(() => {
    if (user) {
      dispatch(setAuth(user));
    }
  }, [user, dispatch]);
>>>>>>> Stashed changes

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

<<<<<<< Updated upstream
=======
    const handleProceed = () => {
      if (user) {
        navigation.navigate("BasicGuidelines", {
          userName: user?.name || "User",
          token: user?.token || "",
          userData: user,
        });
        console.log("not navigating",navigation)
      } else {
        console.warn("User data not available, cannot proceed.");
      }
    };

>>>>>>> Stashed changes
  return (
    <MainLayout>
      <View style={{marginTop: 50, alignItems: 'center', marginBottom: 10}}>
        <WelcomeDaterIllustration width={width * 0.9} />
      </View>
      <HeartSvg style={{alignSelf: 'center', marginBottom: 10}} />
      <BigText bold style={{textAlign: 'center'}}>
        Welcome to Amorvia
      </BigText>
      <MediumText
        style={{
          marginTop: 10,
          alignSelf: 'center',
          textAlign: 'center',
          marginBottom: 40,
          color: COLORS.grey,
          paddingHorizontal: 30,
        }}>
        Please follow these club rules when using this app.
      </MediumText>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <RegularText bold style={{width: '50%', marginLeft: 10}}>
          Be yourself.
        </RegularText>
        <RegularText bold style={{marginLeft: 10}}>
          Be cool.
        </RegularText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={styles.input}>
          <SmallText style={{width: 130, fontSize: 12, color: COLORS.grey}}>
            Upload only your own photos, age and bio that's yours.
          </SmallText>
        </View>
        <View style={styles.input}>
          <SmallText style={{width: 130, fontSize: 12, color: COLORS.grey}}>
            Stay chill and treat others with respect and dignity
          </SmallText>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
        <RegularText bold style={{width: '50%', marginLeft: 10}}>
          Be safe.
        </RegularText>
        <RegularText bold style={{marginLeft: 10}}>
          Be active.
        </RegularText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={styles.input}>
          <SmallText style={{width: 130, fontSize: 12, color: COLORS.grey}}>
            Don’t give out personal info too quickly. Guage, analyse and date
            safely
          </SmallText>
        </View>
        <View style={styles.input}>
          <SmallText style={{width: 130, fontSize: 12, color: COLORS.grey}}>
            Report others’ rude or bad behaviour actively so we can keep it safe
          </SmallText>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <PrimaryBtn
          text={'I Understand'}
<<<<<<< Updated upstream
          onPress={() => navigation.navigate('BasicGuidelines',{userName:userName,token:token})}
=======
          onPress={handleProceed}
>>>>>>> Stashed changes
          containerStyle={{marginHorizontal: 20}}
        />
      </View>
    </MainLayout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    height: 70,
    width: '47%',
    borderRadius: 15,
    padding: 10,
  },
});
