import { Router, Request, Response } from 'express';
import Message from '../types/Message';
import { randomUUID } from 'crypto';
import formatDate from '../helpers/formatDate';
import { format } from 'path';

const messages: Message[] = [
  {
    id: randomUUID(),
    text: 'Hi there!',
    user: 'John',
    added: formatDate(new Date(), 'en-US'),
  },
  {
    id: randomUUID(),
    text: 'Hello, World!',
    user: 'Charles',
    added: formatDate(new Date(), 'en-US'),
  },
];

const indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'MMB - Messages', messages: messages });
});

indexRouter.get('/messages/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const message = messages.find((m) => m.id === id);
  if (!message) {
    return res.status(404).send('Message not found');
  }

  res.render('message', { title: 'MMB - Message Detail', message: message });
});

indexRouter.post('/new', (req: Request, res: Response) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).send('User and text are required');
  }

  const newMessage: Message = {
    id: randomUUID(),
    user,
    text,
    added: formatDate(new Date(), 'en-US'),
  };
  messages.unshift(newMessage);

  res.redirect('/');
});

export default indexRouter;
