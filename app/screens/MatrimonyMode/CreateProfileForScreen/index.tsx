import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { MediumText } from '../../../components/MyText';
import SelfSvg from '../../../../assets/images/ProfileOptionSvg/Self.svg';
import RelativeSvg from '../../../../assets/images/ProfileOptionSvg/Relative.svg';
import SonSvg from '../../../../assets/images/ProfileOptionSvg/Son.svg';
import DaughterSvg from '../../../../assets/images/ProfileOptionSvg/Daughter.svg';
import BrotherSvg from '../../../../assets/images/ProfileOptionSvg/Brother.svg';
import SisterSvg from '../../../../assets/images/ProfileOptionSvg/Sister.svg';
import ClientSvg from '../../../../assets/images/ProfileOptionSvg/Client.svg';
import FriendSvg from '../../../../assets/images/ProfileOptionSvg/Friend.svg';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 'self', name: 'Self', icon: <SelfSvg /> },
  { id: 'relative', name: 'Relative', icon: <RelativeSvg /> },
  { id: 'son', name: 'Son', icon: <SonSvg /> },
  { id: 'daughter', name: 'Daughter', icon: <DaughterSvg /> },
  { id: 'brother', name: 'Brother', icon: <BrotherSvg /> },
  { id: 'sister', name: 'Sister', icon: <SisterSvg /> },
  { id: 'client', name: 'Client', icon: <ClientSvg /> },
  { id: 'friend', name: 'Friend', icon: <FriendSvg /> },
];

const CreateProfileForScreen = () => {
  const navigation = useNavigation();

  const handlePress = (item: any) => {
    const payload = {
      id: item.id,
      name: item.name,
    };
    console.log('Payload:', payload); // <-- log payload

    // Navigate to next screen (optional)
    //@ts-ignore
    navigation.navigate('CreateAccountMat', {profile:payload });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <MediumText bold style={{ textAlign: 'center', marginVertical: 30 }}>
        Create Profile For
      </MediumText>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => handlePress(item)}
          >
            {item.icon}
            <Text style={{ marginTop: 8 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default CreateProfileForScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    flex: 1 / 2,
    height: 120,
    margin: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
