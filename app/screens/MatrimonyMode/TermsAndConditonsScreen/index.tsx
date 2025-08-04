import {View, Text} from 'react-native';
import React from 'react';
import {MediumText, RegularText} from '../../../components/MyText';
import {COLORS} from '../../../styles';
import MainLayout from '../../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../../redux/feature/auth/authSlice';

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAccept = () => {
    dispatch(
      setAuth({
        name: 'GHOST',
        token: 12313232,
      }),
    );
  };
  return (
    <MainLayout onBack={navigation.goBack} title="Terms & Condition">
      <ScrollView style={{paddingHorizontal: 20}}>
        <RegularText style={{color: COLORS.grey, marginTop: 20}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi.
        </RegularText>

        <MediumText
          bold
          style={{
            color: COLORS.primary,
            marginTop: 25,
            marginBottom: 10,
          }}>
          Lorem ipsum dolor
        </MediumText>

        <RegularText style={{color: COLORS.grey}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi.
        </RegularText>
        {/* <PrimaryBtn
          text="Accept"
          onPress={handleAccept}
          containerStyle={{marginVertical: 50}}
        /> */}
      </ScrollView>
    </MainLayout>
  );
};

export default TermsAndConditionsScreen;
