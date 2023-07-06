export interface IUser {
  _id?: any;
  name?: string;
  password?: string;
  email: string;
  isAdmin?: boolean;
  image?: string;
  token?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserInfo {
  userInformation: IUser | null;
}

//RootState interface=> used for state type in useSelector hook

export interface IUserInfoRootState {
  userInfo: IUserInfo;
}
