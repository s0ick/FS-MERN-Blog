import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './auth.module.scss';

export const RegistrationPage = () => {
  return (
    <Paper classes={{root: styles.wrapper}}>
      <Typography classes={{root: styles.title}} variant={'h5'}>
        {'Создание аккаунта'}
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>

      <TextField className={styles.field} label={'Полное имя'} fullWidth/>
      <TextField className={styles.field} label={'E-Mail'} fullWidth/>
      <TextField className={styles.field} label={'Пароль'} fullWidth/>

      <Button size={'large'} variant={'contained'} fullWidth>
        {'Зарегистрироваться'}
      </Button>
    </Paper>
  );
};
