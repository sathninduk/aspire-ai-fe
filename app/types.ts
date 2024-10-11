// app/types.ts
export type RootStackParamList = {
  login: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  MainTabs: undefined;
  SignUp: undefined;
  SignupOtpVerification: { number: string };
  "signup/otp": { number: string };
  "login/splash": undefined;
  "onboard/name": undefined;
  "onboard/check-employed": undefined;
  "onboard/employment-details": undefined;
  "onboard/check-status": undefined;
  "questions/jobber/step1": undefined;
  "questions/jobber/step2": undefined;
  "questions/student/step1": undefined;
  "questions/student/step2": undefined;
  "questions/seeker/step1": undefined;
  "questions/seeker/step2": undefined;
  "onboard/welcome": undefined;
  "onboard/building": undefined;
  "onboard/reveal-ladder": undefined;
};