import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import {validationResult} from 'express-validator';

import {registerValidation} from './validations/auth.js';

mongoose
  .connect('mongodb+srv://admin:14abobal@cluster0.7wefsbn.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connect with data base - Successful'))
  .catch((error) => console.log('Connect with data base - Error: ', error));

const app = express();
app.use(express.json());

app.post('/auth/register', registerValidation,  (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json(errors.array());
  }

  response.json({
    success: true
  });
});

app.listen(2999, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('Server started');
});
