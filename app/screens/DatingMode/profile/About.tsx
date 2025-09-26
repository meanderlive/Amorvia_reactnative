// import { View, Text, StyleSheet } from 'react-native';
// import React from 'react';
// import { RegularText, RegularTextG } from '../../../components/MyText';
// import Octicons from 'react-native-vector-icons/Octicons';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { ProfileStackParams } from '../../../navigation/types';
// import { useSelector } from 'react-redux';
// import { authSelector } from '../../../redux/feature/auth/authSlice';
// import moment from 'moment'; // optional for formatting dates

// const About = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
//   const user = useSelector(authSelector);

//   console.log("Redux user response", user);
//   // console.log("Redux user response", user);

//   // Format DOB if available
//   const formattedDOB = user?.dob ? moment(user.dob).format('DD MMM, YYYY') : 'DOB not provided';

//   return (
//     <View style={{ marginHorizontal: 20 }}>
//       {/* About Header */}
//       <View style={styles.row}>
//         <RegularText bold>About</RegularText>
//         {/* <Octicons
//           onPress={() => navigation.navigate('EditProfile')}
//           name="pencil"
//           size={20}
//           color="gray"
//         /> */}
//       </View>

//       <RegularTextG style={{ marginRight: 22, marginBottom: 10 }}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </RegularTextG>

//       {/* Basic Details Header */}
//       <View style={styles.row}>
//         <RegularText bold>Basic Details</RegularText>
//         <Octicons
//           onPress={() => navigation.navigate('EditProfile')}
//           name="pencil"
//           size={20}
//           color="gray"
//         />
//       </View>

//       {/* Name */}
//       <View style={styles.detailRow}>
//         <RegularTextG style={{ width: 120 }}>Name</RegularTextG>
//         <RegularText>{user?.name ?? 'Not provided'}</RegularText>
//       </View>

//       {/* Date of Birth */}
//       <View style={styles.detailRow}>
//         <RegularTextG style={{ width: 120 }}>Date of Birth</RegularTextG>
//         <RegularText>{formattedDOB}</RegularText>
//       </View>

//       {/* Email */}
//       <View style={styles.detailRow}>
//         <RegularTextG style={{ width: 120 }}>Email</RegularTextG>
//         <RegularText>{user?.email ?? 'Email not provided'}</RegularText>
//       </View>

//       {/* Profession */}
//       <View style={styles.detailRow}>
//         <RegularTextG style={{ width: 120 }}>Profession</RegularTextG>
//         <RegularText>{user?.occupation ?? 'Profession not Submitted'}</RegularText>
//       </View>

//       <View style={styles.row}>
//         <RegularText bold>Interests and Hobbies</RegularText>
//       </View>
//     <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//       {user?.interest?.length > 0 ? (
//         user.interest.map((item: any, index: number) => {
//           // Handle different possible interest object structures
//           const interestName = 
//             typeof item === 'string' ? item : 
//             item?.name || item?.title || `Interest ${index + 1}`;
            
//           const interestId = 
//             item?.id || 
//             item?._id || 
//             `interest-${index}`;

//           return (
//             <View
//               key={interestId}
//               style={{
//                 margin: 4,
//                 borderRadius: 16,
//                 paddingHorizontal: 12,
//                 paddingVertical: 6,
//                 backgroundColor: '#f5f5f5',
//                 borderWidth: 1,
//                 borderColor: '#e0e0e0',
//               }}
//             >
//               <RegularText style={{
//                 fontSize: 14,
//                 color: '#333',
//               }}>
//                 {interestName}
//               </RegularText>
//             </View>
//           );
//         })
//       ) : (
//         <RegularTextG style={{ fontStyle: 'italic' }}>No interests selected</RegularTextG>
//       )}
//     </View>

//     </View>
//   );
// };

// export default About;

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 15,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
// });


import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { RegularText, RegularTextG } from '../../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParams } from '../../../navigation/types';
import { useSelector } from 'react-redux';
import { authSelector, interestSelector } from '../../../redux/feature/auth/authSlice';
import moment from 'moment'; // optional for formatting dates

const About = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const user = useSelector(authSelector);
  const interests = useSelector(interestSelector);

  // Format DOB
  const formattedDOB = user?.dob ? moment(user.dob).format('DD MMM, YYYY') : 'DOB not provided';

  return (
    <View style={{ marginHorizontal: 20 }}>
      
      {/* About Header */}
      <View style={styles.row}>
        <RegularText bold>About</RegularText>
        {/* Optional edit icon */}
        {/* <Octicons onPress={() => navigation.navigate('EditProfile')} name="pencil" size={20} color="gray" /> */}
      </View>

      <RegularTextG style={{ marginRight: 22, marginBottom: 10 }}>
        {user?.description || 'It is a long established fact that a reader will be distracted by the readable content of a page.'}
      </RegularTextG>

      {/* Basic Details */}
      <View style={styles.row}>
        <RegularText bold>Basic Details</RegularText>
        <Octicons
          onPress={() => navigation.navigate('EditProfile')}
          name="pencil"
          size={20}
          color="gray"
        />
      </View>

      {/* Name */}
      <View style={styles.detailRow}>
        <RegularTextG style={{ width: 120 }}>Name</RegularTextG>
        <RegularText>{user?.name ?? 'Not provided'}</RegularText>
      </View>

      {/* Date of Birth */}
      <View style={styles.detailRow}>
        <RegularTextG style={{ width: 120 }}>Date of Birth</RegularTextG>
        <RegularText>{formattedDOB}</RegularText>
      </View>

      {/* Email */}
      <View style={styles.detailRow}>
        <RegularTextG style={{ width: 120 }}>Email</RegularTextG>
        <RegularText>{user?.email ?? 'Email not provided'}</RegularText>
      </View>

      {/* Profession */}
      <View style={styles.detailRow}>
        <RegularTextG style={{ width: 120 }}>Profession</RegularTextG>
        <RegularText>{user?.occupation ?? 'Profession not submitted'}</RegularText>
      </View>

      {/* Interests and Hobbies */}
      <View style={styles.row}>
        <RegularText bold>Interests and Hobbies</RegularText>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {interests.length > 0 ? (
          interests.map((item: any, index: number) => {
            const interestName = typeof item === 'string' ? item : item?.name || `Interest ${index + 1}`;
             console.log("Interest name", interestName);
            const interestId = item?.id || item?._id || index;

            return (
              <View
                key={interestId}
                style={{
                  margin: 4,
                  borderRadius: 16,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  backgroundColor: '#f5f5f5',
                  borderWidth: 1,
                  borderColor: '#e0e0e0',
                }}
              >
                <RegularText style={{ fontSize: 14, color: '#333' }}>
                  {interestName}
                </RegularText>
              </View>
            );
          })
        ) : (
          <RegularTextG style={{ fontStyle: 'italic' }}>No interests selected</RegularTextG>
        )}
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

