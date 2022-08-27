import jwt from 'jsonwebtoken';

import {SECRET_KEY} from './constants.js';

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (!token) {
    return res.status(403).json({
      message: 'Нет доступа'
    });
  }

  const decoded = jwt.verify(token, SECRET_KEY);
  req.userId = decoded._id;
  next();
};
