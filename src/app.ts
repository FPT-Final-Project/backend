import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { PORT } from './configs';
import db from './configs/mongoose';
import routers from './routers';
import { handler, converter, routeNotFound } from './middlewares/error';

const corsOptions = { methods: ['GET', 'POST', 'PUT', 'DELETE'] };
const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  db.connect();
} catch (e) {
  console.log('could not connect');
}
app.use('/v1', routers);
app.use(converter);
app.use(routeNotFound);
app.use(handler);
app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
