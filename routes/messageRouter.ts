import { Router, Request, Response } from 'express';

const messageRouter: Router = Router();

messageRouter.get('/', (req: Request, res: Response) => {
  res.send('New message');
});

export default messageRouter;
