import { NotFoundError } from '@pippip/hugo-common';
import express, { Request, Response } from 'express';
import { Start } from '../models/start';
const router = express.Router();

router.get('/api/start', async (req: Request, res: Response) => {
  const { key } = req.query;
  if (key == '0') {
    throw new NotFoundError();
  }
  const starts = await Start.find();
  res.status(200).send({
    response_status: 1,
    data: {
      starts,
    },
  });
});
router.post('/api/start', async (req: Request, res: Response) => {
  const { title, content } = req.body;
  console.log({
    title,
    content,
  });
  res.send({
    response_status: 1,
    message: 'Test post successful.',
  });
});
export { router as startRouter };
