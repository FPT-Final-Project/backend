import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './configs';
const corsOptions = { methods: ['GET', 'POST', 'PUT', 'DELETE'] };
const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
