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
  "questions/step1": undefined;
  "questions/step2": undefined;
  "questions/step3": undefined;
  "questions/step4": undefined;
  "questions/step5": undefined;
  "onboard/welcome": undefined;
  "onboard/building": undefined;
  "onboard/reveal-ladder": undefined;
};