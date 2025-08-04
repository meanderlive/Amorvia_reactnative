import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  MediumText,
  RegularText,
  RegularTextG,
} from '../../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import {AccordionItem} from 'react-native-accordion-list-view';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import {COLORS} from '../../../styles';
import {api_getAllFAQs} from '../../../api/faqs';
import MainLayout from '../../../components/MainLayout';
import {useHideBottomBar} from '../../../hook/useHideBottomBar';

const faq = [
  {
    id: 1,
    body: 'To create a profile, simply sign up using your email or phone number. Once registered, add your photos and information about yourself to complete your profile.',
    title: 'How do I create a profile?',
  },
  {
    id: 2,
    body: 'No, to ensure privacy and security for all users, you will need to sign up and create a profile to browse and interact with others on the platform.',
    title: 'Can I browse profiles without signing up?',
  },
  {
    id: 3,
    body: 'Yes, we prioritize user safety. We have safety guidelines, profile verification options, and a reporting system for any inappropriate behavior.',
    title: 'Are there safety measures in place?',
  },
  {
    id: 4,
    body: 'You can start a conversation by sending a message or a like to someone you are interested in. Make sure to personalize your message based on their profile to spark a meaningful conversation.',
    title: 'How can I start a conversation?',
  },
  {
    id: 5,
    body: 'Absolutely! Our app offers various filters like age range, location, interests, and more to help you find compatible matches that align with your preferences.',
    title: 'Is there a way to filter matches?',
  },
];

type Props = {
  title: string;
  body: any;
};

const FAQ = ({title, body}: Props) => {
  const [active, setActive] = React.useState(false);
  useHideBottomBar();

  return (
    <AccordionItem
      customTitle={() => (
        <RegularText style={{width: '95%'}}>{title}</RegularText>
      )}
      customBody={() => {
        return (
          <View style={{marginTop: 5}}>
            <Text style={{color: COLORS.grey}}>{body}</Text>
          </View>
        );
      }}
      animationDuration={100}
      isOpen={false}
      onPress={isOpen => {
        if (isOpen) {
          setActive(!active);
        } else {
          setActive(!active);
        }
      }}
      containerStyle={{
        padding: 5,
        marginLeft: -5,
        marginBottom: 20,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
      }}
      customIcon={() => (
        <>
          {active ? (
            <RegularText style={{color: COLORS.primary}}>l</RegularText>
          ) : (
            <Entypo name={'plus'} size={20} color={COLORS.primary} />
          )}
        </>
      )}
    />
  );
};
const FaqScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  return (
    <MainLayout onBack={navigation.goBack} title="FAQs">
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          backgroundColor: 'white',
          flex: 1,
        }}>
        <MediumText bold>FAQs</MediumText>
        <RegularTextG style={{marginTop: 5, fontSize: 16}}>
          How can we help you to improve your service?
        </RegularTextG>
        <View style={{marginTop: 15}}>
          {faq.map((item: any, index) => {
            return <FAQ title={item.title} body={item?.body} key={index} />;
          })}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default FaqScreen;
