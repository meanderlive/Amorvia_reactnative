// import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {COLORS} from '../../styles';
// import {BigText, RegularText, SmallText} from '../MyText';
// import PrimaryBtn from '../PrimaryBtn';
// import Entypo from 'react-native-vector-icons/Entypo';
// import BGSVG from '../../../assets/images/svg/matchCardTopSvg.svg';
// import HeartSvg from '../../../assets/images/svg/heartWhite.svg';
// import {Image} from 'react-native';
// import SecondaryBtn from '../SecondaryBtn';
// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {ChatStackParams} from '../../navigation/types';

// const B =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkV81Cc_pT6HWD4-UZnH_eiYwHQMlTNUkmw&usqp=CAU';
// const A =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqa1_cT9DVW04ITh3Fm13o8yE_t6K6GPND2A&usqp=CAU';

// const MatchedPopup = ({
//   onCancel,
//   onConfirm,
//   visible,
// }: {
//   onConfirm?: () => void;
//   onCancel: () => void;
//   visible: boolean;
// }) => {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<ChatStackParams>>();
//   return (
//     <Modal animationType="fade" transparent={true} visible={visible}>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             width: 300,
//             backgroundColor: COLORS.white,
//             borderRadius: 20,
//             paddingVertical: 20,
//             // alignItems: 'center',
//           }}>
//           <View style={{position: 'absolute', top: -20}}>
//             <BGSVG width={300} />
//           </View>
//           <View style={{marginBottom: 70}}>
//             <BigText style={{textAlign: 'center', color: COLORS.white}}>
//               You're Macthed
//             </BigText>
//             <SmallText style={{textAlign: 'center', color: COLORS.white}}>
//               You and Desirae have both liked each other
//             </SmallText>

//             {/* RIGHT PERSON START */}
//             <View
//               style={{
//                 padding: 20,
//                 paddingBottom: 0,
//                 alignItems: 'center',
//                 gap: 20,
//                 flexDirection: 'row',
//                 alignSelf: 'flex-end',
//               }}>
//               <View style={{alignItems: 'flex-end', gap: 5}}>
//                 <RegularText style={{textAlign: 'right', color: COLORS.white}}>
//                   Kadin Das
//                 </RegularText>
//                 <SmallText style={{textAlign: 'right', color: COLORS.white}}>
//                   CTO
//                 </SmallText>
//                 <View style={{flexDirection: 'row'}}>
//                   <Entypo
//                     name={'location-pin'}
//                     color={COLORS.white}
//                     size={12}
//                   />
//                   <SmallText style={{textAlign: 'right', color: COLORS.white}}>
//                     Delhi , India
//                   </SmallText>
//                 </View>
//               </View>
//               <View
//                 style={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: 40,
//                 }}>
//                 <Image
//                   source={{uri: A}}
//                   style={{
//                     width: '100%',
//                     borderRadius: 40,
//                     height: '100%',
//                     resizeMode: 'cover',
//                   }}
//                 />
//               </View>
//             </View>
//             {/* RIGHT PERSON END */}
//             <HeartSvg height={20} style={{alignSelf: 'center'}} />
//             {/* LEFT PRERSON START */}
//             <View
//               style={{
//                 padding: 20,
//                 paddingTop: 0,
//                 alignItems: 'center',
//                 gap: 20,
//                 flexDirection: 'row',
//               }}>
//               <View
//                 style={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: 40,
//                 }}>
//                 <Image
//                   source={{uri: B}}
//                   style={{
//                     width: '100%',
//                     borderRadius: 40,
//                     height: '100%',
//                     resizeMode: 'cover',
//                   }}
//                 />
//               </View>
//               <View style={{gap: 5}}>
//                 <RegularText style={{color: COLORS.white}}>
//                   Desiare Donin
//                 </RegularText>
//                 <SmallText style={{color: COLORS.white}}>Art Manager</SmallText>
//                 <View style={{flexDirection: 'row'}}>
//                   <SmallText style={{color: COLORS.white}}>
//                     Delhi , India
//                   </SmallText>
//                   <Entypo
//                     name={'location-pin'}
//                     color={COLORS.white}
//                     size={12}
//                   />
//                 </View>
//               </View>
//             </View>
//             {/* LEFT PERSON END */}
//           </View>
//           <View style={{gap: 20, marginHorizontal: 15}}>
//             <PrimaryBtn
//               onPress={() => {
//                 navigation.navigate('Message'), onCancel;
//               }}
//               textStyle={{fontSize: 14}}
//               text="Send a Message"
//             />
//             <SecondaryBtn
//               text="Schedule Virtual Date"
//               onPress={onCancel}
//               textStyle={{fontSize: 14}}
//               // containerStyle={{backgroundColor: COLORS.white}}
//             />
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default MatchedPopup;

// const styles = StyleSheet.create({});
