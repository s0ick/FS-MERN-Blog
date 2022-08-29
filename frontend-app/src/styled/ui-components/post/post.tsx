import React, {FC, useCallback} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import {IPost} from '../../../types/post';

import {Loader} from '../loader/loader';
import {UserInfo} from '../user-info/user-info';

import styles from './post.module.scss';

export const Post: FC<IPost> = ({
  _id, commentsCount, viewsCount,
  title, createdAt, tags,
  imageUrl, children = <></>, user,
  isEditable, isFullPost, isLoading
}) => {
  const onClickRemove = useCallback(
    () => {

    }, []
  );

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className={clsx(styles.wrapper, { [styles.wrapperFull]: isFullPost })}>

      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color={'primary'}>
              <EditIcon />
            </IconButton>
          </Link>

          <IconButton onClick={onClickRemove} color={'secondary'}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}

      <div className={styles.block}>
        <UserInfo user={user} createdAt={createdAt} />

        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>

          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>

          {children && <div className={styles.content}>{children}</div>}

          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
