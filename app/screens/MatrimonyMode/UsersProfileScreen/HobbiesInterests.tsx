import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RegularText, RegularTextG} from '../../../components/MyText';
import {COLORS} from '../../../styles';

const interest = [
  {type: 'Painting'},
  {type: 'Dancing'},
  {type: 'Travelling'},
  {type: 'Sports'},
  {type: 'Running'},
];

const HobbiesInterests = () => {
  return (
    <View style={styles.container}>
      <RegularText bold style={{marginBottom: 10}}>
        Hobbies & Interests
      </RegularText>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {interest.map((item: any, index: any) => {
          return (
            <View
              style={{
                margin: 5,
                borderRadius: 20,
                paddingHorizontal: 10,
                borderWidth: 2,
                borderColor: 'lightgray',
              }}>
              <Text
                style={{
                  opacity: 1,
                  fontSize: 14,
                  color: 'rgba(0,0,0,0.3)',
                  padding: 2,
                  margin: 3,
                }}>
                {item?.type}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HobbiesInterests;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 1,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
