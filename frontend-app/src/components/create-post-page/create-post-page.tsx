import React, {useCallback, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import {IOptionsSimpleMDE} from '../../types/common';

import styles from './create-post.module.scss'

export const CreatePostPage = () => {
  const imageUrl = ''; // TODO: What this? Need a fix
  const [someValue, setSomeValue] = useState(''); // TODO: Rename this

  const handleChangeFile = useCallback(
    () => {

    }, []
  );

  const onClickRemoveImage = useCallback(
    () => {

    }, []
  );

  const onChange = useCallback(
    (value: string) => {
      setSomeValue(value);
    }, []
  );

  const options: IOptionsSimpleMDE = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: 'FK3GH-PVQW6-PXKTR' // TODO: Need a generate uniq ID
      }
    }),
    []
  );

  return (
    <Paper style={{ padding: 30 }}>
      <Button variant={'outlined'} size={'large'}>
        {'Загрузить превью'}
      </Button>

      <input type={'file'} onChange={handleChangeFile} hidden/>

      {imageUrl && (
        <Button variant={'contained'} color={'error'} onClick={onClickRemoveImage}>
          {'Удалить'}
        </Button>
      )}

      {imageUrl && (
        <img className={styles.image} src={`http://localhost:2999${imageUrl}`} alt={'Uploaded'}/>
      )}

      <br/><br/>

      <TextField
        classes={{root: styles.title}}
        variant={'standard'}
        placeholder={'Заголовок статьи...'}
        fullWidth
      />

      <TextField classes={{root: styles.tags}} variant={'standard'} placeholder={'Тэги'} fullWidth />

      <SimpleMDE className={styles.editor} value={someValue} onChange={onChange} options={options} />

      <div className={styles.buttons}>
        <Button size={'large'} variant={'contained'}>
          {'Опубликовать'}
        </Button>

        <Link to={'/'}>
          <Button size={'large'}>{'Отмена'}</Button>
        </Link>
      </div>
    </Paper>
  );
}
