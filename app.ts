import express from 'express';
import indexRouter from './routes/indexRouter';

const app = express();

app.use('/', indexRouter);

app.listen('3000', () => {
  console.log(`Server running at http://localhost:3000`);
});
