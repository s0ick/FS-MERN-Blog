import React from 'react';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import styles from './add-comment.module.scss'

export const AddComment = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar
        classes={{root: styles.avatar}}
        src={'https://mui.com/static/images/avatar/5.jpg'}
      />
      <div className={styles.form}>
        <TextField
          label={'Написать комментарий'}
          variant={'outlined'}
          maxRows={10}
          multiline
          fullWidth
        />
        <Button variant={'contained'}>{'Отправить'}</Button>
      </div>
    </div>
  );
};
