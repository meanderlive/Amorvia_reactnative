import { ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import MainLayout from '../../../components/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { COLORS } from '../../../styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../navigation/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { modeSelector } from '../../../redux/feature/auth/authSlice';
import { api_getInterestsByModeId } from '../../../api/interest';
import { api_createUser } from '../../../api/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InterestScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProp<RootStackParams, 'Interest'>>();
  const { moreNewPayload } = route.params;

  const [selectedIntrest, setSelectedIntrest] = useState<{ [key: string]: string }>({});
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [error, setError] = useState('');
  const mode = useSelector(modeSelector);

  console.log('mode', mode);
  console.log('Payload received in InterestScreen:', moreNewPayload);

  useEffect(() => {
    console.log('Mode changed in InterestScreen:', mode);
    console.log('Mode type:', typeof mode);
    console.log('Mode is array:', Array.isArray(mode));

    // Handle case where mode might be an array
    const modeData = Array.isArray(mode) ? mode[0] : mode;
    console.log('Extracted modeData:', modeData);
    console.log('modeData._id:', modeData?._id);

    if (modeData?._id) {
      console.log('Mode has _id, fetching interests...');
      fetchInterests();
    } else {
      console.log('Mode does not have _id, cannot fetch interests');
      console.log('modeData keys:', modeData ? Object.keys(modeData) : 'null');
    }
  }, [mode]);

  const fetchInterests = async () => {
    // Handle case where mode might be an array
    const modeData = Array.isArray(mode) ? mode[0] : mode;
    console.log('Current mode in Redux:', modeData);
    console.log('Mode ID:', modeData?._id);

    if (!modeData?._id) {
      setError('Mode not selected');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await api_getInterestsByModeId(modeData._id);
      console.log('Interests API response:', response);
      if (response.isSuccess) {
        setInterests(response.data);
      } else {
        setError('Failed to fetch interests');
      }
    } catch (error) {
      console.error('Error fetching interests:', error);
      setError('Error loading interests');
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (dob: any) => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleProceed = async () => {
    const selectedInterestIds = Object.values(selectedIntrest).filter(interest => interest !== '');
    console.log('Selected interest IDs:', selectedInterestIds);

    if (selectedInterestIds.length === 0) {
      Alert.alert('Error', 'Please select at least one interest');
      return;
    }

    // Validate required fields
    if (!moreNewPayload.fullname || !moreNewPayload.email || !moreNewPayload.password) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    // Get mode data from Redux
    const modeData = Array.isArray(mode) ? mode[0] : mode;

    // Create the API payload according to the required format
    const apiPayload = {
      userName: moreNewPayload.fullname,
      email: moreNewPayload.email,
      password: moreNewPayload.password,
      confirmPassword: moreNewPayload.confirmPassword,
      status: "Active",
      subscription: true,
      phoneNumber: "", // This should come from previous screens
      mode: modeData?._id || "",
      name: moreNewPayload.fullname,
      FathersName: "",
      MothersName: "",
      age: calculateAge(moreNewPayload.dob),
      dob: moreNewPayload.dob,
      iAm: moreNewPayload.gender,
      looking: "Female", // Default value, should be configurable
      marital: "Single", // Default value, should be configurable
      SmokingandDrinkingHabits: "No", // Default value
      address: moreNewPayload.Country,
      description: "",
      interest: selectedInterestIds,
      createdProfileFor: "Self", // Default value
      horoscopes: "",
      motherTongue: "",
      Height: moreNewPayload.height,
      Weight: "",
      occupation: "",
      createdBy: "Self", // Default value
      salary: "",
      DietPreferences: "",
      birthPlace: "",
      NumberofSiblings: "",
      workingExperience: "",
      familyStatus: "",
      FamilyBackground: "",
      education: "",
      Religion: "",
      Caste: "",
      FathersStatus: "",
      MothersStatus: "",
      NumberOfBrother: "",
      NoOfMarriedBrother: "",
      NumberOfSister: "",
      NoOfMarriedSister: "",
      CompanyName: "",
      HighestQualification: "",
      CollageName: "",
      bio: "",
      community: "",
      Matches: true,
      Messages: true,
      Promotional: true,
      manglikStatus: true
    };

    console.log('API Payload:', JSON.stringify(apiPayload, null, 2));

    // Call the signup API
    setSignupLoading(true);
    try {
      const response = await api_createUser(apiPayload);
      console.log('Signup response:', response);

      if (response.isSuccess) {
        Alert.alert('Success', 'User created successfully!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login', { finalPayload: apiPayload })
            // onPress: () => navigation.navigate('Welcome', { finalPayload: apiPayload })
          }
        ]);
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      Alert.alert('Signup Failed', error?.message || 'Something went wrong');
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
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: COLORS.primary,
                borderRadius: 5,
              }}>
              <Text style={{ color: 'white' }}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            {interests.map((item: any) => {
              const selected = !!selectedIntrest[item._id];
              return (
                <TouchableOpacity
                  key={item._id}
                  onPress={() => {
                    selected
                      ? setSelectedIntrest({ ...selectedIntrest, [item._id]: '' })
                      : setSelectedIntrest({
                        ...selectedIntrest,
                        [item._id]: item._id,
                      });
                  }}
                  style={{
                    opacity: selected ? 1 : 0.5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: selected ? COLORS.primary : '#777',
                    margin: 5,
                    backgroundColor: selected ? COLORS.primary + '20' : 'transparent',
                  }}>
                  {/* <MaterialIcons 
                  name={item.icon} 
                  size={18} 
                  color={selected ? COLORS.primary : 'grey'} 
                  style={{marginRight: 8}}
                /> */}
                  <Text
                    style={{
                      fontSize: 15,
                      color: selected ? COLORS.primary : 'grey',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>

      <View style={{ marginBottom: 50 }}>
        {/* Debug info */}
        {/* <View style={{marginHorizontal: 20, marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0'}}>
          <Text>Selected Interests: {Object.values(selectedIntrest).filter(interest => interest !== '').length}</Text>
          <Text>Selected IDs: {Object.values(selectedIntrest).filter(interest => interest !== '').join(', ')}</Text>
          <Text>Mode: {Array.isArray(mode) ? mode[0]?.name : mode?.name}</Text>
        </View> */}

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
