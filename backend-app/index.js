import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import {validationResult} from 'express-validator';

import {registerValidation} from './validations/auth.js';
import UserModel from './models/Users.js';

mongoose
  .connect('mongodb+srv://admin:14abobal@cluster0.7wefsbn.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('Connect with data base - Successful'))
  .catch((error) => console.log('Connect with data base - Error: ', error));

const app = express();
app.use(express.json());

app.post('/auth/register', registerValidation, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json(errors.array());
  }

  const {email, fullName, avatarUrl, password} = request.body;

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const doc = new UserModel({email, fullName, avatarUrl, passwordHash});
  await doc.save()
    .then(res => response.json(res))
    .catch(error => {
      console.log(error);
      response.status(500).json({
        message: 'Не удалось завершить регистрацию. Попробуйте позже'
      });
    });
});

app.listen(2999, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('Server started');
});
