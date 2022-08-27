import express from 'express';
import mongoose from 'mongoose';

import {loginValidation, postCreateValidation, registerValidation} from './validators.js';
import checkAuthMe from './utils/checkAuthMe.js';
import * as AuthController from './controllers/authController.js';
import * as PostController from './controllers/postController.js';

mongoose
  .connect('mongodb+srv://admin:14abobal@cluster0.7wefsbn.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('Connect with data base - Successful'))
  .catch((error) => console.log('Connect with data base - Error: ', error));

const app = express();
app.use(express.json());

/* Authorization and Registration */
app.post('/auth/login', loginValidation, AuthController.login);
app.post('/auth/register', registerValidation, AuthController.register);
app.get('/auth/me', checkAuthMe, AuthController.getMe);

/* Posts */
app.post('/posts', checkAuthMe, postCreateValidation, PostController.create);
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.delete('/posts/:id', checkAuthMe, PostController.remove);
app.patch('/posts/:id', checkAuthMe, PostController.update);


app.listen(2999, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('Server started');
});
