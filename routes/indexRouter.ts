import { Router, Request, Response } from 'express';
import Message from '../types/Message';
import { randomUUID } from 'crypto';
import formatDate from '../helpers/formatDate';

const messages: Message[] = [
  {
    id: randomUUID(),
    text: "There are no hard things, only things you don't understand yet.",
    user: 'incandesc3nce',
    added: formatDate(new Date(), 'en-US'),
  },
  {
    id: randomUUID(),
    text: "Our doubts are traitors and make us lose the good we oft might win, by fearing to attempt.",
    user: 'William Shakespeare, Measure for Measure',
    added: formatDate(new Date(), 'en-US'),
  },
  {
    id: randomUUID(),
    text: "In the end, we only regret the chances we didn't take.",
    user: 'Lewis Carroll',
    added: formatDate(new Date(), 'en-US'),
  },
  {
    id: randomUUID(),
    text: "Of all sad words of tongue or pen, the saddest are these, 'It might have been.'",
    user: 'John Greenleaf Whittier',
    added: formatDate(new Date(), 'en-US'),
  },
  {
    id: randomUUID(),
    text: "Hey, let's go bowling!",
    user: 'Roman Bellic',
    added: formatDate(new Date(), 'en-US'),
  }
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
