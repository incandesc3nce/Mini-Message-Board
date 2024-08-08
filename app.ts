import express from 'express';
import indexRouter from './routes/indexRouter';
import messageRouter from './routes/messageRouter';
import path from 'path';

const app = express();

app.use('/', indexRouter);
app.use('/new', messageRouter);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.listen('3000', () => {
  console.log(`Server running at http://localhost:3000`);
});
