import express from 'express';
import indexRouter from './routes/indexRouter';
import messageRouter from './routes/messageRouter';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', messageRouter);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running.`);
});
