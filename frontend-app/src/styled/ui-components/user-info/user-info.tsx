import React, {FC} from 'react';

import {IUserInfo} from '../../../types/user';

import styles from './user-info.module.scss';

export const UserInfo: FC<IUserInfo> = ({user, createdAt}) => {
  const {avatarUrl, fullName} = user;

  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatarUrl || '/no-avatar.png'} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{createdAt}</span>
      </div>
    </div>
  );
}
