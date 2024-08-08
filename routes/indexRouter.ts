import { Router, Request, Response } from 'express';
import Message from '../types/Message';

const messages: Message[] = [
  {
    text: 'Hi there!',
    user: 'John',
    added: new Date(),
  },
  {
    text: 'Hello, World!',
    user: 'Charles',
    added: new Date(),
  },
];

const indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.post('/new', (req: Request, res: Response) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).send('User and text are required');
  }

  const newMessage: Message = {
    user,
    text,
    added: new Date(),
  };
  messages.unshift(newMessage);

  res.redirect('/');
});

export default indexRouter;
