import { Router, Request, Response } from 'express';

const indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

export default indexRouter;
