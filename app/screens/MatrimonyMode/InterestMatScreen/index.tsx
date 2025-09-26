import React, { useEffect, useMemo, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MainLayout from '../../../components/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import { COLORS } from '../../../styles';
import { RootStackParams } from '../../../navigation/types';
import { modeSelector } from '../../../redux/feature/auth/authSlice';
import { api_getInterestsByModeId } from '../../../api/interest';
// import { api_createUser, CreateUserPayload } from '../../../api/user';
import { api_createUser } from '../../../api/auth';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';

type Interest = {
  _id: string;
  name: string;
};

type InterestMatRoute = RouteProp<RootStackParams, 'InterestMat'>;

const calculateAge = (dob?: string | Date): number => {
  if (!dob) return 0;
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
};

const InterestMatScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<InterestMatRoute>();

  const { fullPayload} = route.params;
  console.log('📦 Received full payload in InterestMat:', fullPayload);

  const modeFromRedux = useSelector(modeSelector);
  const modeData = useMemo(
    () => (Array.isArray(modeFromRedux) ? modeFromRedux[0] : modeFromRedux),
    [modeFromRedux]
  );
  const modeId = modeData?._id || '65943637acc570d6b14edf38';

  const [interests, setInterests] = useState<Interest[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInterests = async () => {
      if (!modeId) {
        setError('Mode not selected');
        return;
      }
      setLoading(true);
      setError('');
      try {
        const response = await api_getInterestsByModeId(modeId);
        if (response?.isSuccess) {
          setInterests(response.data || []);
          console.log('📥 API Interests:', response.data);
        } else {
          setError('Failed to fetch interests');
        }
      } catch (err) {
        console.error('❌ Error fetching interests:', err);
        setError('Error loading interests');
      } finally {
        setLoading(false);
      }
    };
    fetchInterests();
  }, [modeId]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    const toggled = interests.find((i) => i._id === id);
    console.log(
      `🟢 Toggled: ${toggled?.name} (${id})`,
      selectedInterests.includes(id) ? 'Removed' : 'Added'
    );
  };

  const handleProceed = async () => {
    if (selectedInterests.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Validation',
        text2: 'Please select at least one interest',
      });
      return;
    }

    const fullName =
      fullPayload?.fullName ??
      fullPayload?.fullname ??
      fullPayload?.name ??
      fullPayload?.userName ??
      '';
    const email = fullPayload?.email ?? '';
    const password = fullPayload?.password ?? '';
    const confirmPassword = fullPayload?.confirmPassword ?? password;
    const dob = fullPayload?.dob ?? '';
    const age = fullPayload?.age ?? calculateAge(dob);

    const apiPayload: CreateUserPayload = {
      userName: fullName,
      email: email || `${Date.now()}@amorvia.com`,
      password: password,
      confirmPassword: confirmPassword,
      status: 'Active',
      subscription: true,
      phoneNumber: fullPayload?.phone ?? fullPayload?.phoneNumber ?? '',
      mode: modeId || '',
      name: fullName,
      FathersName: fullPayload?.fatherName ?? '',
      MothersName: fullPayload?.motherName ?? '',
      age,
      dob,
      iAm: fullPayload?.gender ?? 'Male',
      looking: fullPayload?.looking ?? 'Female',
      marital: fullPayload?.marital ?? 'Single',
      SmokingandDrinkingHabits: fullPayload?.SmokingandDrinkingHabits ?? 'No',
      address: fullPayload?.address ?? fullPayload?.Country ?? '',
      description: fullPayload?.description ?? '',
      interest: selectedInterests,
      createdProfileFor: fullPayload?.createdProfileFor ?? 'Self',
      horoscopes: fullPayload?.horoscope ?? '',
      motherTongue: fullPayload?.motherTongue ?? '',
      Height: fullPayload?.height ?? '',
      Weight: fullPayload?.Weight ?? '',
      occupation: fullPayload?.occupation ?? '',
      createdBy: fullPayload?.createdBy ?? 'Self',
      salary: fullPayload?.income ?? '',
      DietPreferences: fullPayload?.diet ?? '',
      birthPlace: fullPayload?.birthPlace ?? '',
      NumberofSiblings: fullPayload?.brothers ?? '',
      workingExperience: fullPayload?.experience ?? '',
      familyStatus: fullPayload?.familyStatus ?? '',
      FamilyBackground: fullPayload?.FamilyBackground ?? '',
      education: fullPayload?.education ?? '',
      Religion: fullPayload?.Religion ?? '',
      Caste: fullPayload?.Caste ?? '',
      FathersStatus: fullPayload?.FathersStatus ?? '',
      MothersStatus: fullPayload?.MothersStatus ?? '',
      NumberOfBrother: fullPayload?.NumberOfBrother ?? '',
      NoOfMarriedBrother: fullPayload?.NoOfMarriedBrother ?? '',
      NumberOfSister: fullPayload?.NumberOfSister ?? '',
      NoOfMarriedSister: fullPayload?.NoOfMarriedSister ?? '',
      CompanyName: fullPayload?.CompanyName ?? '',
      HighestQualification: fullPayload?.HighestQualification ?? '',
      CollageName: fullPayload?.CollageName ?? '',
      bio: fullPayload?.bio ?? '',
      community: fullPayload?.community ?? '',
      Matches: fullPayload?.Matches ?? true,
      Messages: fullPayload?.Messages ?? true,
      Promotional: fullPayload?.Promotional ?? true,
      manglikStatus: fullPayload?.manglikStatus ?? true,
    };

    console.log('🚀 Final CREATE USER PAYLOAD:', JSON.stringify(apiPayload));

    setSignupLoading(true);
    try {
      const response = await api_createUser(apiPayload);
      console.log('✅ CREATE USER RESPONSE:', response);

      if (!response?.isSuccess) {
        const serverMsg =
          response?.message || response?.error || 'Signup failed';
        Toast.show({
          type: 'error',
          text1: 'Signup Failed',
          text2: serverMsg,
        });
        return;
      }

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'User created successfully',
      });

      navigation.navigate('AddPhotoMat', {
        finalpayload: apiPayload,
      });
    } catch (err: any) {
      console.error('❌ Error creating user:', err);
      const serverMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        'Unexpected error occurred';
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: serverMsg,
      });
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <MainLayout title="Interests" onBack={navigation.goBack}>
      <ScrollView>
        {loading ? (
          <View style={{ alignItems: 'center', paddingVertical: 50 }}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <Text style={{ marginTop: 8 }}>Loading interests…</Text>
          </View>
        ) : error ? (
          <View style={{ alignItems: 'center', paddingVertical: 50 }}>
            <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            {interests.map((item) => {
              const selected = selectedInterests.includes(item._id);
              return (
                <TouchableOpacity
                  key={item._id}
                  onPress={() => toggleInterest(item._id)}
                  style={{
                    opacity: selected ? 1 : 0.5,
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: selected ? COLORS.primary : '#777',
                    margin: 5,
                    backgroundColor: selected
                      ? COLORS.primary + '20'
                      : 'transparent',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: selected ? COLORS.primary : 'grey',
                    }}
                  >
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

export default InterestMatScreen;
