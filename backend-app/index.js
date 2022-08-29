import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

import {loginValidation, postCreateValidation, registerValidation} from './validators.js';
import {checkAuthMe, handleValidationErrors} from './utils/indexUtils.js';
import {AuthController, PostController}  from './controllers/indexController.js';

mongoose
  .connect('mongodb+srv://admin:14abobal@cluster0.7wefsbn.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('Connect with data base - Successful'))
  .catch((error) => console.log('Connect with data base - Error: ', error));

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (_, __, callBack) => {
    callBack(null, 'uploads');
  },
  filename: (_, file, callBack) => {
    callBack(null, file.originalname);
  }
});

const upload = multer({storage});

/* Authorization and Registration */
app.post('/auth/login', loginValidation, handleValidationErrors, AuthController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, AuthController.register);
app.get('/auth/me', checkAuthMe, AuthController.getMe);

/* Posts */
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.delete('/posts/:id', checkAuthMe, PostController.remove);
app.post('/posts', checkAuthMe, postCreateValidation, handleValidationErrors, PostController.create);
app.patch('/posts/:id', checkAuthMe, postCreateValidation, handleValidationErrors, PostController.update);

/* Upload image */
app.post('/upload', checkAuthMe, upload.single('image'), (request, response) => {
  return response.json({
    url: `/uploads/${request.file.originalname}`
  });
});


app.listen(2999, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('Server started');
});
