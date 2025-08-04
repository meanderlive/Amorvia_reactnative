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
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
  SmallText,
  Text30,
} from '../components/MyText';
import PrimaryBtn from '../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../navigation/types';
import SecondaryBtn from '../components/SecondaryBtn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const ProfileBoostModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [active, setActive] = React.useState(1);

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
          <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.flash}>
                <MaterialIcons name="flash-on" size={40} color="white" />
              </View>
              <MediumText style={{marginBottom: 5}}>Skip the Queue</MediumText>

              <RegularTextG>
                Be the top profile in your area for 30 minutes
              </RegularTextG>
              <RegularTextG>to get more matches</RegularTextG>
            </View>

            {/* {PLANS} */}
            <View
              style={{
                marginVertical: 40,
                flexDirection: 'row',
                backgroundColor: '#B2FFFF',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setActive(2);
                }}
                style={[
                  styles.plan,
                  {
                    borderWidth: active === 2 ? 2 : 0,
                    borderColor: active === 2 ? COLORS.primary : 'transparent',
                    borderRadius: active === 2 ? 15 : 0,
                  },
                ]}>
                <Text30 bold>10</Text30>
                <SmallText style={{color: 'black'}}>Boost(s)</SmallText>
                <RegularText style={{marginVertical: 2}}>
                  $3.90 each
                </RegularText>
                <RegularText>($22.99)</RegularText>
              </TouchableOpacity>

              {/* {} */}

              <TouchableOpacity
                onPress={() => {
                  setActive(1);
                }}
                style={[
                  styles.plan,
                  {
                    borderWidth: active === 1 ? 2 : 0,
                    borderColor: active === 1 ? COLORS.primary : 'transparent',
                    borderRadius: active === 1 ? 15 : 0,
                    justifyContent: 'flex-start',
                  },
                ]}>
                {active === 1 ? (
                  <View style={styles.save}>
                    <RegularText style={{color: 'white'}}>Save 45%</RegularText>
                  </View>
                ) : null}

                <Text30 bold>5</Text30>
                <SmallText style={{color: 'black'}}>Boost(s)</SmallText>
                <RegularText style={{marginVertical: 2}}>
                  $4.60 each
                </RegularText>
                <RegularText>($22.99)</RegularText>
              </TouchableOpacity>

              {/* {} */}

              <TouchableOpacity
                onPress={() => {
                  setActive(3);
                }}
                style={[
                  styles.plan,
                  {
                    borderWidth: active === 3 ? 2 : 0,
                    borderColor: active === 3 ? COLORS.primary : 'transparent',
                    borderRadius: active === 3 ? 15 : 0,
                  },
                ]}>
                <Text30 bold>1</Text30>
                <SmallText style={{color: 'black'}}>Boost(s)</SmallText>
                <RegularText style={{marginVertical: 2}}>
                  $8.99 each
                </RegularText>
              </TouchableOpacity>
            </View>
            {/* {PLANS} */}

            <View style={{gap: 10, marginHorizontal: 20}}>
              <PrimaryBtn
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('ComingSoon'), onHide();
                }}
                text="Boost Me"
              />
              <SecondaryBtn onPress={onHide} text="Get Marrier Plus" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProfileBoostModal;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    marginBottom: 100,
    paddingVertical: 20,
  },
  flash: {
    height: 100,
    width: 100,
    borderRadius: 70,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  plan: {
    backgroundColor: '#B2FFFF',
    height: 170,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  save: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -1,
    paddingVertical: 5,
  },
});
