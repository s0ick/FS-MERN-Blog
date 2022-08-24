import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello, world!')
});

app.listen(2999, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log('Server started');
});
