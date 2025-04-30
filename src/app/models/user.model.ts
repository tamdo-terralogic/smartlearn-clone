export interface UserProfileGetRes {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  profilePicURL: string;
  isClassTeacher: boolean;
  employeeCode: string;
  employeeLevel: string;
  country: string;
  designation: string;
  ramcoEmpCode: string;
  facebookHandle: string;
  instagramHandle: string;
  twitterHandle: string;
  linkedInHandle: string;
  city: string;
  dob: string; // or you can use Date if you want to parse it later
  usercode: string;
}
