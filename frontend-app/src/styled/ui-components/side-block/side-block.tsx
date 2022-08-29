import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import {ISideBlock} from '../../../types/common';

import styles from './side-block.module.scss';

export const SideBlock: FC<ISideBlock> = ({title, children}) => {
  return (
    <Paper classes={{root: styles.wrapper}}>
      <Typography variant={'h6'} classes={{root: styles.title}}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}
