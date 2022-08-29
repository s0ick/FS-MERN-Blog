import {CreatedAt} from './post';

export interface IUser {
  avatarUrl: string | undefined;
  fullName: string;
}

export interface IUserInfo {
  createdAt: CreatedAt;
  user: IUser;
}
