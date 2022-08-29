import React from 'react';

import {IUser} from './user';

export type CreatedAt =  string;

export interface IPost {
  _id: number;
  commentsCount: number;
  viewsCount: number;
  title: string;
  createdAt: CreatedAt;
  tags: Array<string>;
  imageUrl: string | undefined;
  children?: React.ReactNode | undefined;
  user: IUser;
  isEditable?: boolean | undefined;
  isFullPost?: boolean | undefined;
  isLoading?: boolean | undefined;
}
