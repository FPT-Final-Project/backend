import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

const corsOptions = { methods: ['GET', 'POST', 'PUT', 'DELETE'] };
const app = express();
const port = 3000;
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
