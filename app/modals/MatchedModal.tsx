import {
  Alert,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import BGSVG from '../../assets/images/svg/matchCardTopSvg.svg';
import HeartSvg from '../../assets/images/svg/heartWhite.svg';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../styles';
import {BigText, RegularText, SmallText} from '../components/MyText';
import PrimaryBtn from '../components/PrimaryBtn';
import SecondaryBtn from '../components/SecondaryBtn';

type Props = {
  onHide?: () => void;
  onSubmit?: () => void;
};

const MatchedModal = ({onHide, onSubmit}: Props) => {
  const navigation = useNavigation();
  const [isScheduleModalOpen, setIsScheduleModalOpen] = React.useState(false);
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            flex: 1,
            backgroundColor: isScheduleModalOpen
              ? 'transparent'
              : 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: isScheduleModalOpen ? 0 : 300,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              paddingVertical: 20,
            }}>
            <View style={{position: 'absolute', top: -20}}>
              <BGSVG width={300} />
            </View>
            <View style={{marginBottom: 70}}>
              <BigText style={{textAlign: 'center', color: COLORS.white}}>
                You're Macthed
              </BigText>
              <SmallText style={{textAlign: 'center', color: COLORS.white}}>
                You and Desirae have both liked each other
              </SmallText>

              {/* RIGHT PERSON START */}
              <View
                style={{
                  padding: 20,
                  paddingBottom: 0,
                  alignItems: 'center',
                  gap: 20,
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                }}>
                <View style={{alignItems: 'flex-end', gap: 5}}>
                  <RegularText
                    style={{textAlign: 'right', color: COLORS.white}}>
                    Eliza Willimas
                  </RegularText>
                  <SmallText style={{textAlign: 'right', color: COLORS.white}}>
                    CTO
                  </SmallText>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo
                      name={'location-pin'}
                      color={COLORS.white}
                      size={12}
                    />
                    <SmallText
                      style={{textAlign: 'right', color: COLORS.white}}>
                      Delhi , India
                    </SmallText>
                  </View>
                </View>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                  }}>
                  <Image
                    source={require('../components/SwipeCard/assets/img1.jpg')}
                    style={{
                      width: '100%',
                      borderRadius: 40,
                      height: '100%',
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
              {/* RIGHT PERSON END */}
              <HeartSvg height={20} style={{alignSelf: 'center'}} />
              {/* LEFT PRERSON START */}
              <View
                style={{
                  padding: 20,
                  paddingTop: 0,
                  alignItems: 'center',
                  gap: 20,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                  }}>
                  <Image
                    source={require('../components/SwipeCard/assets/img2.jpg')}
                    style={{
                      width: '100%',
                      borderRadius: 40,
                      height: '100%',
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <View style={{gap: 5}}>
                  <RegularText style={{color: COLORS.white}}>
                    John Doe
                  </RegularText>
                  <SmallText style={{color: COLORS.white}}>
                    Art Manager
                  </SmallText>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SmallText style={{color: COLORS.white}}>
                      California, US
                    </SmallText>
                    <Entypo
                      name={'location-pin'}
                      color={COLORS.white}
                      size={12}
                    />
                  </View>
                </View>
              </View>
              {/* LEFT PERSON END */}
            </View>
            <View style={{gap: 10, marginHorizontal: 15, marginTop: 30}}>
              <PrimaryBtn
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('Message'), onHide;
                }}
                textStyle={{fontSize: 14}}
                text="Send a Message"
              />
              {/* {isScheduleModalOpen && (
                <ScheduleModal onHide={() => setIsScheduleModalOpen(false)} />
              )} */}
              <SecondaryBtn
                text="Submit"
                onPress={() => {
                  onSubmit && onSubmit();
                  //@ts-ignore
                  navigation.navigate('Event');
                }}
                textStyle={{fontSize: 14}}
                // containerStyle={{backgroundColor: COLORS.white}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default MatchedModal;

const styles = StyleSheet.create({});
