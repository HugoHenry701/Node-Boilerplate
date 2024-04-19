import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import logger from 'morgan';

import cookieSession from 'cookie-session';

//routes
import { startRouter } from './routes/start';
//middlewares
import { errorHandler } from '@pippip/hugo-common';
import { NotFoundError } from '@pippip/hugo-common';

const app = express();

app.set('trust proxy', true); //trust HTTPS connection
app.use(json());
app.use(logger('dev', {}));
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
//api
app.use(startRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

//middleware Usage
app.use(errorHandler);

export { app };
