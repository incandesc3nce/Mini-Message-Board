import { Router, Request, Response } from 'express';
import Message from '../types/Message';
import formatDate from '../helpers/formatDate';
import { db } from '../db/exportQueries';

const getMessages = async () => {
  const messages: Message[] = await db.getMessages();
  return messages;
}

const getMessage = async (id: number) => {
  const message: Message = await db.getMessage(id);
  return message;
}

const indexRouter: Router = Router();
const locale = 'en-US';

indexRouter.get('/', async (req: Request, res: Response) => {
  const messages: Message[] = await getMessages();
  messages.forEach((m) => {
    const date = new Date(m.added);
    m.added = formatDate(date, locale);
  });
  res.render('index', { title: 'MMB - Messages', messages: messages });
});

indexRouter.get('/messages/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const message: Message = await getMessage(id);
  message.added = formatDate(new Date(message.added), locale);
  console.log(message);
  if (!message) {
    return res.status(404).send('Message not found');
  }

  res.render('message', { title: 'MMB - Message Detail', message: message });
});

indexRouter.post('/new', async (req: Request, res: Response) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).send('User and text are required');
  }

  await db.addMessage(user, text);

  res.redirect('/');
});

export default indexRouter;
