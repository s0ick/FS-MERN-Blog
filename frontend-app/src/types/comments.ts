import React from 'react';

import {IUser} from './user';

export interface IComment {
  user: IUser,
  text: string
}

export interface ICommentBlock {
  items: Array<IComment>;
  isLoading: boolean | undefined;
  children?: React.ReactNode | undefined;
}
