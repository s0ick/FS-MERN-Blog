import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/Users.js';
import {SECRET_KEY} from '../utils/constants.js';

export const login = async (request, response) => {
  const user = await UserModel.findOne({email: request.body.email});

  if (!user) {
    return response.status(400).json({
      message: 'Неправльная почта или пароль'
    });
  }

  const isValidPass = await bcrypt.compare(request.body.password, user._doc.passwordHash);

  if (!isValidPass) {
    return response.status(400).json({
      message: 'Неправльная почта или пароль'
    });
  }

  const token = jwt.sign({
    _id: user._id
  }, SECRET_KEY, {
    expiresIn: '30d'
  });

  const {passwordHash, ...userData} = user._doc;

  return response.json({
    ...userData, token
  });
};


export const register = async (request, response) => {
  const {email, fullName, avatarUrl, password} = request.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const doc = new UserModel({email, fullName, avatarUrl, passwordHash: hash});
  const user = await doc.save()
    .then(res => res)
    .catch(error => {
      console.log(error);
      return {message: 'Не удалось завершить регистрацию. Попробуйте позже'};
    });

  if (!user._id) {
    return response.status(500).json(user);
  }

  const token = jwt.sign({
    _id: user._id
  }, SECRET_KEY, {
    expiresIn: '30d'
  });

  const {passwordHash, ...userData} = user._doc;

  return response.json({
    ...userData, token
  });
};


export const getMe = async (request, response) => {
  const user = await UserModel.findById(request.userId);

  if (!user) {
    return response.status(404).json({
      message: 'Пользователь не найден'
    });
  }

  const {passwordHash, ...userData} = user._doc;

  return response.json(userData);
};
