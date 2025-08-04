import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParams} from '../../../navigation/types';
import {COLORS} from '../../../styles';

const data = [
  {id: 1, title: 'Protector'},
  {id: 2, title: 'Nurturer'},
  {id: 3, title: 'Sometimes protector, sometimes nurturer'},
  {id: 4, title: 'Do not care'},
];
const Item = ({
  title,
  onSelect,
  selectedId,
}: {
  title: string;
  onSelect: () => void;
  selectedId: boolean;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onSelect}
        style={[
          styles.answer,
          {backgroundColor: selectedId ? COLORS.lightBlue : 'white'},
        ]}>
        <RegularText style={{flex: 1}}>{title}</RegularText>
      </TouchableOpacity>
    </>
  );
};

// const ShowAlert = Alert.alert('Error', 'Please slect an option.');

const CompatibilityScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParams>>();
  // const [selectedId, setSelectedId] = React.useState<null | number>(null);
  const [selected, setSelected] = React.useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 15}}>
        {/* {HEADER} */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Entypo
            onPress={() => navigation.goBack()}
            name="cross"
            size={35}
            color="black"
          />
          <MediumText
            bold
            style={{
              flex: 1,
              textAlign: 'center',
              marginLeft: -10,
              fontSize: 20,
            }}>
            Compatibility Quiz
          </MediumText>
        </View>
        {/* {} */}
        <View style={{alignItems: 'center', marginTop: 40}}>
          <RegularTextG style={{fontSize: 16}}>
            Answer at least 10 questions & find
          </RegularTextG>
          <RegularTextG style={{fontSize: 16}}>
            out how compatible you are with
          </RegularTextG>
          <RegularTextG style={{fontSize: 16}}>other users</RegularTextG>
        </View>

        {/* {QUESTION} */}
        <View style={styles.container}>
          <View style={styles.question}>
            <RegularText
              style={{
                color: 'lightgray',
                alignSelf: 'flex-end',
              }}>
              Required\question 1/10
            </RegularText>
            <BigText bold style={{color: 'white', fontSize: 22}}>
              Do you prefer to be a protector or number in your relationships ?
            </BigText>
          </View>
          {/* {data.map(i => {
            return (
              <Item
                onSelect={() => setSelectedId(i.id)}
                title={i.title}
                selectedId={i.id === selectedId}
              />
            );
          })} */}

          {/* {ANSWER 1} */}
          <TouchableOpacity
            onPress={() => {
              setSelected(1);
            }}
            style={[
              styles.answer,
              {backgroundColor: selected === 1 ? COLORS.lightBlue : 'white'},
            ]}>
            <RegularText style={{flex: 1}}>Protector</RegularText>
          </TouchableOpacity>
          {/* {2} */}
          <TouchableOpacity
            onPress={() => {
              setSelected(2);
            }}
            style={[
              styles.answer,
              {backgroundColor: selected === 2 ? COLORS.lightBlue : 'white'},
            ]}>
            <RegularText style={{flex: 1}}>Nurturer</RegularText>
          </TouchableOpacity>
          {/* {3} */}
          <TouchableOpacity
            onPress={() => {
              setSelected(3);
            }}
            style={[
              styles.answer,
              {backgroundColor: selected === 3 ? COLORS.lightBlue : 'white'},
            ]}>
            <RegularText style={{flex: 1}}>
              Sometimes protector, sometimes nurturer
            </RegularText>
          </TouchableOpacity>
          {/* {4} */}
          <TouchableOpacity
            onPress={() => {
              setSelected(4);
            }}
            style={[
              styles.answer,
              {backgroundColor: selected === 4 ? COLORS.lightBlue : 'white'},
            ]}>
            <RegularText style={{flex: 1}}>Do not care</RegularText>
          </TouchableOpacity>
          {/* {} */}
        </View>
        <TouchableOpacity
          onPress={() =>
            selected
              ? navigation.navigate('CompatibilityResult')
              : Alert.alert('Error', 'Please select an answer.')
          }
          style={styles.btn}>
          <RegularText style={{color: 'white'}}>Next</RegularText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompatibilityScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 35,
    marginHorizontal: 10,
  },
  question: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
  },
  answer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    height: 60,
    padding: 15,
    // borderBottomRightRadius: 15,
    // borderBottomLeftRadius: 15,
  },
  btn: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: 200,
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-end',
    marginTop: 30,
  },
});
