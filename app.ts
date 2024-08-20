import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/indexRouter';
import messageRouter from './routes/messageRouter';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', messageRouter);

app.get('*', function(req, res){
  res.status(404).send('Could not find requested page');
});

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}.`);
});
