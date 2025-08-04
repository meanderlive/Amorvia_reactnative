export type RootStackParams = {
  ModeSelect: undefined;
  Splash: undefined;
  OnBoarding: undefined;
  CareerDetailMat: undefined;
  AlmostDoneMat: undefined;
  FamilyDetail: undefined;

  // Matrimony Screens

  LoginM: undefined;
  First: undefined;
  VerifyOtpMat: undefined;
  CreateProfileFor: undefined;
  CreateAccountMat: undefined;
  VerifySignupOtp: undefined;
  BasicDetail: undefined;
  IdUploaded: undefined;
  SubmitId: undefined;
  PartnerPref: undefined;
  InterestMat: undefined;
  AddPhotoMat: undefined;
  // AddPhoto: {user: any; accessToken: any};

  // Dating Screens

  Login: undefined;
  CodeVerify: undefined;
  Welcome: undefined;
  PersonalDetails: {user: any; accessToken: any};
  // AddPhoto: {user: any; accessToken: any};
  // Interest: {user: any; accessToken: any};
  Interest: undefined;
  AddPhoto: undefined;
  MainTab: undefined;
  MainTabMat: undefined;
  WelcomeStack: undefined;
  BasicGuidelines: undefined;
  CreateAccount: undefined;
  ContactDetail: undefined;
  VerifyOtpTwo: undefined;
  CareerDetail: undefined;
  AlmostDone: undefined;
};

export type MainTabNavigatorParams = {
  //Dating Tabs
  DiscoverTab: undefined;
  EventsTab: undefined;
  ChatTab: undefined;
  PremiumTab: undefined;
  ProfileTab: undefined;

  //Matrimony Tabs
  HomeTab: undefined;
  MatchTab: undefined;
  MatChatTab: undefined;
  MatProfileTab: undefined;
  MatPremiumTab: undefined;
};

//DATING STACKS
export type DiscoverStackParams = {
  Discover: undefined;
  Filter: undefined;
  UsersProfile: undefined;
  Error: undefined;
  ConnectionLost: undefined;
  Chat: undefined;
  Message: undefined;
  Compatibility: undefined;
  CompatibilityResult: undefined;
};

export type EventStackParams = {
  Event: undefined;
  SelectUser: undefined;
  ScheduleDate: {isReSchedule: boolean};
};

export type ChatStackParams = {
  Chat: undefined;
  Message: undefined;
  AudioCall: undefined;
  ScheduleDate: undefined;
};

export type ProfileStackParams = {
  Profile: undefined;
  EditProfile: undefined;
  Setting: undefined;
  Settings: undefined;
  MyPhotos: undefined;
  PrivacySetting: undefined;
  ManageNotification: undefined;
  RecentPasses: undefined;
  HelpSupport: undefined;
  Faq: undefined;
  Faqs: undefined;
  BlockedUsers: undefined;
  UpdateInterest: undefined;
  PremiumInfo: undefined;
  ActivityHistory: undefined;
  AccountSetting: undefined;
  TermsAndConditions: undefined;
  ComingSoon: undefined;
  UpdateEmail: undefined;
  Notification: undefined;
  Language: undefined;
  Favorites: undefined;
  TravelMode: undefined;
  RateUs: undefined;
  PrivacyPolicy: undefined;
};

export type PremiumStackParams = {
  PremiumInfo: undefined;
  ComingSoon: undefined;
  Payment: undefined;
  AddNewCard: undefined;
  AddBank: undefined;
  PaymentVerifyOtp: undefined;
  CancelPlan: undefined;
};

//MATRIMONY STACKS

export type HomeStackParams = {
  Home: undefined;
  UsersProfile: undefined;
  Filter: undefined;
  Testimonial: undefined;
  Astro: undefined;
  Notification: undefined;
};

export type MatchStackParams = {
  Matches: undefined;
  UsersProfile: undefined;
  Astro: undefined;
};

export type MatChatStackParams = {
  Chat: undefined;
  Message: undefined;
  AudioCall: undefined;
  ScheduleDate: undefined;
};

export type MatProfileStackParams = {
  Account: undefined;
  Profile: undefined;
  AccountSetting: undefined;
  EditProfile: undefined;
  Setting: undefined;
  Settings: undefined;
  MyPhotos: undefined;
  PrivacySetting: undefined;
  ManageNotification: undefined;
  RecentPasses: undefined;
  HelpSupport: undefined;
  Faq: undefined;
  Faqs: undefined;
  BlockedUsers: undefined;
  UpdateInterest: undefined;
  PremiumInfo: undefined;
  ActivityHistory: undefined;
  TermsAndConditions: undefined;
  ComingSoon: undefined;
  UpdateEmail: undefined;
  Notification: undefined;
  Language: undefined;
  Favorites: undefined;
  TravelMode: undefined;
  RateUs: undefined;
  PartnerPref: undefined;
  EditBasicDetails: undefined;
  EditContactDetails: undefined;
  EditPersonalDetail: undefined;
  PrivacyPolicy: undefined;
  AstroServices: undefined;
  WeddingResource: undefined;
  WeddingVenues: undefined;
  WeddingDecor: undefined;
  WeddingDress: undefined;
  WeddingMusic: undefined;
  WeddingShoot: undefined;
  WeddingCake: undefined;
  DressDetail: undefined;
  CakeDetail: undefined;
  HideAndDelete: undefined;
  DeleteProfile: undefined;
  HideProfile: undefined;
  EditEduCareer: undefined;
  EditFamilyDetail: undefined;
};

export type MatPremiumStackParams = {
  PremiumInfo: undefined;
  ComingSoon: undefined;
  Payment: undefined;
  AddNewCard: undefined;
  AddBank: undefined;
  PaymentVerifyOtp: undefined;
  CancelPlan: undefined;
};
