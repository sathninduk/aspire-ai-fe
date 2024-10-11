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
};