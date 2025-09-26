import { ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import MainLayout from '../../../components/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { COLORS } from '../../../styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { useSelector, useDispatch } from 'react-redux';
import { modeSelector, setAuth } from '../../../redux/feature/auth/authSlice';
import { api_getInterestsByModeId } from '../../../api/interest';
import { api_createUser } from '../../../api/auth';

interface Interest {
  id: string;
  name: string;
}

const InterestScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProp<RootStackParams, 'Interest'>>();
  const { moreNewPayload } = route.params;
  // console.log("MORE NEW PAYLOAD------->>>>>>",moreNewPayload.phoneNumber)

  const dispatch = useDispatch();

  const [selectedInterest, setSelectedInterest] = useState<Record<string, Interest>>({});
  const [interests, setInterests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [error, setError] = useState('');

  const mode = useSelector(modeSelector);
  const modeId = mode?._id || '659436bcacc570d6b14edf41';

  useEffect(() => {
    fetchInterests();
  }, []);

  const fetchInterests = async () => {
    setLoading(true);
    try {
      const response = await api_getInterestsByModeId(modeId);
      console.log("Interests response", response);
      if (response.isSuccess) setInterests(response.data);
      else setError('Failed to fetch interests');
    } catch (err) {
      setError('Error loading interests');
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (dob: string | Date) => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  const handleProceed = async () => {
    const selectedInterestIds = Object.values(selectedInterest).map(interest => interest.id);
    if (selectedInterestIds.length === 0) {
      Alert.alert('Error', 'Please select at least one interest');
      return;
    }
    // Validate required fields
    if (!moreNewPayload.name || !moreNewPayload.email || !moreNewPayload.password) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    const apiPayload = {
      userName: moreNewPayload.name,
      email: moreNewPayload.email,
      password: moreNewPayload.password,
      confirmPassword: moreNewPayload.confirmPassword,
      status: 'Active',
      subscription: true,
      phoneNumber: moreNewPayload.phoneNumber || 1234512345,
      mode: modeId,
      name: moreNewPayload.name,
      FathersName: '',
      MothersName: '',
      age: calculateAge(moreNewPayload.dob),
      dob: moreNewPayload.dob,
      iAm: moreNewPayload.gender,
      looking: moreNewPayload.lookingFor || 'Female',
      marital: moreNewPayload.maritalStatus || 'Single',
      SmokingandDrinkingHabits: moreNewPayload.habits || 'No',
      address: moreNewPayload.country || '',
      description: moreNewPayload.about || '',
      interest: selectedInterestIds,
      createdProfileFor: moreNewPayload.profileFor || 'Self',
      Height: moreNewPayload.height || '',
      Weight: moreNewPayload.weight || '',
      occupation: moreNewPayload.profession || '',
      createdBy: 'Self',
      salary: moreNewPayload.income || '',
      education: moreNewPayload.education || '',
      Religion: moreNewPayload.religion || '',
      Caste: moreNewPayload.caste || '',
      bio: moreNewPayload.bio || '',
      community: moreNewPayload.community || '',
      Matches: true,
      Messages: true,
      Promotional: true,
      manglikStatus: moreNewPayload.manglik || false
    };

    setSignupLoading(true);
    try {
      const response = await api_createUser(apiPayload);
      if (!response.isSuccess) throw new Error(response.message || 'Signup failed');

      const data = response.data;

      // Ensure user object has id, name, email
      const userData = {
        _id: data?._id || '',
        email: data?.email || moreNewPayload.email,
        name: data?.name || moreNewPayload.name,
        userName: data?.userName || moreNewPayload.name,
        mode: data?.mode || modeId,
        phoneNumber: data?.phoneNumber || moreNewPayload.phoneNumber || '',
        token: data?.token || '',
        ...data
      };

      dispatch(setAuth({ user: userData, token: userData.token }));

      Alert.alert('Success', 'User created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (err: any) {
      Alert.alert('Signup Failed', err?.message || 'Something went wrong');
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <MainLayout title="Interests" onBack={navigation.goBack}>
      <ScrollView>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 50 }}>
            <Text>Loading interests...</Text>
          </View>
        ) : error ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 50 }}>
            <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
            <TouchableOpacity
              onPress={fetchInterests}
              style={{ marginTop: 10, padding: 10, backgroundColor: COLORS.primary, borderRadius: 5 }}
            >
              <Text style={{ color: 'white' }}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginHorizontal: 20 }}>
            {interests.map((item: any) => { 
              const selected = !!selectedInterest[item._id];
              return ( 
                <TouchableOpacity 
                  key={item._id}
                  onPress={() => {
                    if (selected) {
                      const newSelected = { ...selectedInterest };
                      delete newSelected[item._id];
                      setSelectedInterest(newSelected);
                    } else {
                      setSelectedInterest({
                        ...selectedInterest,
                        [item._id]: { 
                          id: item._id, 
                          name: item.name 
                        }
                      });
                    }
                  }}
                style={
                  { opacity: selected ? 1 : 0.5, 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingVertical: 8, 
                paddingHorizontal: 15, 
                borderRadius: 20, 
                borderWidth: 2, 
                borderColor: selected ? COLORS.primary : '#777', 
                margin: 5,
                 backgroundColor: selected ? COLORS.primary + '20' : 'transparent', }} > 
                 <Text style={{ fontSize: 15, color: selected ? COLORS.primary : 'grey' }}>
                  {item.name}
                  </Text>
                   </TouchableOpacity> 
                  );
                   })}
                   </View> 
                  )}
      </ScrollView>

      <View style={{ marginBottom: 50 }}>
        <PrimaryBtn
          text={signupLoading ? 'Creating Account...' : 'Proceed'}
          onPress={handleProceed}
          loading={signupLoading}
          containerStyle={{ marginHorizontal: 20 }}
        />
      </View>
    </MainLayout>
  );
};

export default InterestScreen;


// import { ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import MainLayout from '../../../components/MainLayout';
// import PrimaryBtn from '../../../components/PrimaryBtn';
// import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
// import { COLORS } from '../../../styles';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParams } from '../../../navigation/types';
// import { useSelector, useDispatch } from 'react-redux';
// import { modeSelector, setAuth } from '../../../redux/feature/auth/authSlice';
// import { api_getInterestsByModeId } from '../../../api/interest';
// import { api_createUser } from '../../../api/auth';

// const InterestScreen = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
//   const route = useRoute<RouteProp<RootStackParams, 'Interest'>>();
//   const { moreNewPayload } = route.params;
//   const dispatch = useDispatch();

//   const [selectedInterest, setSelectedInterest] = useState<{ [key: string]: string }>({});
//   const [interests, setInterests] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [signupLoading, setSignupLoading] = useState(false);
//   const [error, setError] = useState('');

//   const mode = useSelector(modeSelector);
//   const modeId = mode?._id || '659436bcacc570d6b14edf41'; // Default mode ID

//   useEffect(() => {
//     fetchInterests();
//   }, []);

//   const fetchInterests = async () => {
//     setLoading(true);
//     try {
//       const response = await api_getInterestsByModeId(modeId);
//       if (response.isSuccess) setInterests(response.data);
//       else setError('Failed to fetch interests');
//     } catch (err) {
//       setError('Error loading interests');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const calculateAge = (dob: string | Date) => {
//     if (!dob) return 0;
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
//     return age;
//   };

//   const handleProceed = async () => {
    //  const selectedInterestIds = Object.entries(selectedInterest).map(([id, interest]) => ({ id, name: interest.name }));
//     if (selectedInterestIds.length === 0) {
//       Alert.alert('Error', 'Please select at least one interest');
//       return;
//     }
  
// {{ ... }}
//       Alert.alert('Error', 'Please fill all required fields');
//       return;
//     }
  
//     const apiPayload = {
//       userName: moreNewPayload.fullname,
//       email: moreNewPayload.email,
//       password: moreNewPayload.password,
//       confirmPassword: moreNewPayload.confirmPassword,
//       status: 'Active',
//       subscription: true,
//       phoneNumber: moreNewPayload.phoneNumber || '',
//       mode: modeId,
//       name: moreNewPayload.fullname,
//       FathersName: '',
//       MothersName: '',
//       age: calculateAge(moreNewPayload.dob),
//       dob: moreNewPayload.dob,
//       iAm: moreNewPayload.gender,
//       looking: moreNewPayload.lookingFor || 'Female',
//       marital: moreNewPayload.maritalStatus || 'Single',
//       SmokingandDrinkingHabits: moreNewPayload.habits || 'No',
//       address: moreNewPayload.Country || '',
//       description: moreNewPayload.about || '',
//       interest: selectedInterestIds,
//       createdProfileFor: moreNewPayload.profileFor || 'Self',
//       Height: moreNewPayload.height || '',
//       Weight: moreNewPayload.weight || '',
//       occupation: moreNewPayload.profession || '',
//       createdBy: 'Self',
//       salary: moreNewPayload.income || '',
//       education: moreNewPayload.education || '',
//       Religion: moreNewPayload.religion || '',
//       Caste: moreNewPayload.caste || '',
//       bio: moreNewPayload.bio || '',
//       community: moreNewPayload.community || '',
//       Matches: true,
//       Messages: true,
//       Promotional: true,
//       manglikStatus: moreNewPayload.manglik || false
//     };
  
//     setSignupLoading(true);
//     try {
//       const response = await api_createUser(apiPayload);
//       if (response.isSuccess) {
//         const { data } = response;
  
//         if (data?.user && data?.token) {
//           // ✅ Save full user object if backend sends it
//           dispatch(setAuth({ user: data.user, token: data.token }));
//         } else {
//           // ⚡ fallback if backend only returns partial fields
//           dispatch(setAuth({
//             user: {
//               _id: data?._id || '',
//               email: data?.email || moreNewPayload.email,
//               name: data?.name || moreNewPayload.fullname,
//               dob: moreNewPayload.dob,
//               profession: moreNewPayload.profession || '',
//               mode: data?.mode || modeId,
//             },
//             token: data?.token || ''
//           }));
//         }
  
//         Alert.alert('Success', 'User created successfully!', [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Login')
//           }
//         ]);
//       } else {
//         throw new Error(response.message || 'Signup failed');
//       }
//     } catch (err: any) {
//       Alert.alert('Signup Failed', err?.message || 'Something went wrong');
//     } finally {
//       setSignupLoading(false);
//     }
//   };
//   return (
//     <MainLayout title="Interests" onBack={navigation.goBack}>
//       <ScrollView>
//         {loading ? (
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 50 }}>
//             <Text>Loading interests...</Text>
//           </View>
//         ) : error ? (
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 50 }}>
//             <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
//             <TouchableOpacity
//               onPress={fetchInterests}
//               style={{
//                 marginTop: 10,
//                 padding: 10,
//                 backgroundColor: COLORS.primary,
//                 borderRadius: 5,
//               }}
//             >
//               <Text style={{ color: 'white' }}>Retry</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginHorizontal: 20 }}>
//             {interests.map(item => {
//               const selected = !!selectedInterest[item._id];
//               return (
//                 <TouchableOpacity
//                   key={item._id}
//                   onPress={() => {
//                     selected
//                       ? setSelectedInterest({ ...selectedInterest, [item._id]: '' })
//                       : setSelectedInterest({ ...selectedInterest, [item._id]: item._id });
//                   }}
//                   style={{
//                     opacity: selected ? 1 : 0.5,
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     paddingVertical: 8,
//                     paddingHorizontal: 15,
//                     borderRadius: 20,
//                     borderWidth: 2,
//                     borderColor: selected ? COLORS.primary : '#777',
//                     margin: 5,
//                     backgroundColor: selected ? COLORS.primary + '20' : 'transparent',
//                   }}
//                 >
//                   <Text style={{ fontSize: 15, color: selected ? COLORS.primary : 'grey' }}>{item.name}</Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         )}
//       </ScrollView>

//       <View style={{ marginBottom: 50 }}>
//         <PrimaryBtn
//           text={signupLoading ? 'Creating Account...' : 'Proceed'}
//           onPress={handleProceed}
//           loading={signupLoading}
//           containerStyle={{ marginHorizontal: 20 }}
//         />
//       </View>
//     </MainLayout>
//   );
// };

// export default InterestScreen;

