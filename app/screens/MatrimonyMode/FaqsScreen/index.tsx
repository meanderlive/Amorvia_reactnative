import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {MediumText, RegularTextG} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {api_getAllFAQs} from '../../../api/faqs';
import MainLayout from '../../../components/MainLayout';

const faq = [
  {
    ques: 'How do I create a profile?',
    answer:
      'To create a profile, simply sign up using your email or phone number. Once registered, add your photos and information about yourself to complete your profile.',
  },
  {
    ques: 'Can I browse without signing up?',
    answer:
      'No, to ensure privacy and security for all users, you will need to sign up and create a profile to browse and interact with others on the platform.',
  },
  {
    ques: 'Are there safety measures in place?',
    answer:
      'Yes, we prioritize user safety. We have safety guidelines, profile verification options, and a reporting system for any inappropriate behavior.',
  },
  {
    ques: 'How can I start a conversation?',
    answer:
      'You can start a conversation by sending a message or a like to someone you are interested in. Make sure to personalize your message based on their profile to spark a meaningful conversation.',
  },
  {
    ques: 'Is there a way to filter matches?',
    answer:
      'Absolutely! Our app offers various filters like age range, location, interests, and more to help you find compatible matches that align with your preferences.',
  },
];

const FaqsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleAnswer = (index: any) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <MainLayout onBack={navigation.goBack} title="FAQs">
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          backgroundColor: 'white',
          flex: 1,
        }}>
        <MediumText bold>FAQs</MediumText>
        <RegularTextG style={{marginTop: 5, fontSize: 16, marginBottom: 10}}>
          How can we help you to improve your service?
        </RegularTextG>
        <View style={{marginTop: 15}}>
          {faq.map((item, index) => (
            <TouchableOpacity
              style={{
                padding: 5,
                marginLeft: -5,
                marginBottom: 20,
                borderBottomColor: '#EEEEEE',
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                paddingBottom: 10,
                flexDirection: 'row',
              }}
              key={index}
              onPress={() => toggleAnswer(index)}>
              <View style={{width: '90%'}}>
                <MediumText style={{fontSize: 17}}>{item.ques}</MediumText>
                {expandedIndex === index && (
                  <Text style={{marginTop: 5}}>{item.answer}</Text>
                )}
              </View>
              <AntDesign
                name={expandedIndex === index ? 'minus' : 'plus'}
                size={21}
                color="gray"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default FaqsScreen;
