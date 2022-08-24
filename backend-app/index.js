import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:14abobal@cluster0.7wefsbn.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connect with data base - Successful'))
  .catch((error) => console.log('Connect with data base - Error: ', error));

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello, world!');
});

app.post('/auth/login', (request, response) => {
  const token = jwt.sign(
    {
      email: request.body.email,
      userName: 's0ick'
    },
    'VJNKDF-FNKJ3N-TMDJEN'
  );

  response.json({
    success: true,
    token
  });
});

app.listen(2999, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('Server started');
});
