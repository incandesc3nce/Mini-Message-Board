import { Router, Request, Response } from 'express';

type Message = {
  text: string,
  user: string,
  added: Date
};

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
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

export default indexRouter;
