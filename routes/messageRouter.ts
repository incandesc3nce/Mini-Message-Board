import { Router, Request, Response } from 'express';

const messageRouter: Router = Router();

messageRouter.get('/', (req: Request, res: Response) => {
  res.render('newMessage', { title: 'New message' });
});

export default messageRouter;
