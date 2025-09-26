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
  AddPhotoMat: { interests: string[] };
  // AddPhoto: {user: User; accessToken: string};

  // Dating Screens

  Login: undefined;
  CodeVerify: {
    otp: string;    // OTP received from API
    token: string;  // Auth token
  };
  Welcome: {
    finalPayload: {
      userName: string;
      email: string;
      password: string;
      confirmPassword: string;
      status: string;
      subscription: boolean;
      phoneNumber: string;
      mode: string;
      name: string;
      FathersName: string;
      MothersName: string;
      age: number;
      dob: string | Date;
      iAm: string;
      looking: string;
      marital: string;
      SmokingandDrinkingHabits: string;
      address: string;
      description: string;
      interest: string[];
      createdProfileFor: string;
      horoscopes: string;
      motherTongue: string;
      Height: string;
      Weight: string;
      occupation: string;
      createdBy: string;
      salary: string;
      DietPreferences: string;
      birthPlace: string;
      NumberofSiblings: string;
      workingExperience: string;
      familyStatus: string;
      FamilyBackground: string;
      education: string;
      Religion: string;
      Caste: string;
      FathersStatus: string;
      MothersStatus: string;
      NumberOfBrother: string;
      NoOfMarriedBrother: string;
      NumberOfSister: string;
      NoOfMarriedSister: string;
      CompanyName: string;
      HighestQualification: string;
      CollageName: string;
      bio: string;
      community: string;
      Matches: boolean;
      Messages: boolean;
      Promotional: boolean;
      manglikStatus: boolean;
    };
    res?: any
  };
  PersonalDetails: {user: User; accessToken: string};
  // AddPhoto: {user: User; accessToken: string};
  // Interest: {user: User; accessToken: string};
  Interest: {
    moreNewPayload: {
      fullname: string;
      dob: string | Date;
      gender: string;
      height: string;
      Country: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
  };
  AddPhoto: undefined;
  MainTab: undefined;
  MainTabMat: undefined;
  WelcomeStack: undefined;
  BasicGuidelines: {userName: string; token: string};
  CreateAccount: undefined;
  ContactDetail: {
    payload: {
      fullname: string;
      dob: string | Date;
      gender: string;
      height: string;
      Country: string;
    };
  };
  VerifyOtpTwo: undefined;
  CareerDetail: {
    newPayload: {
      fullname: string;
      dob: string | Date;
      gender: string;
      height: string;
      Country: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
  };
  AlmostDone: {
    newPayload: {
      fullname: string;
      dob: string | Date;
      gender: string;
      height: string;
      Country: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
  };
};

export interface User {
  id: string;
  name: string;
  email: string;
}

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
