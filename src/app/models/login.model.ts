export interface LoginObject {
    email: string;
    password: string;
    brandID: number;
    isSendEmail: boolean;
    lDeviceDetails: DeviceDetails;
    source: string;
  }
  
  export interface ConfirmObject {
    loginEmailId: string;
    loginOpt: string;
    brandID: number;
    campusID: number;
    lDeviceDetails: DeviceDetails;
    loginPhoneno: string;
    userId: number | null;
    userName: string;
    uuid: string;
    source: string;
  }

  export interface LoginResponse {
    userName: string | null;
    emailOrPhone: string | null;
    userId: number | null;
    email: string | null;
    phoneNo: string | null;
    loginEmailId: string | null;
    loginPhoneNo: string | null;
    token: string | null;
  }



  export interface DeviceDetails {
    deviceId: string;
    deviceName: string;
    deviceType: string;
    latitude: number;
    longitude: number;
    deviceToken: string;
    appVersion: string;
    osVersion: string;
    firebaseToken: string;
    deviceAddress: string;
    Location: string;
  }