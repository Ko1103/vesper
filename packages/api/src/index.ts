import {Request, Response } from 'express';
import express from 'express';
const app = express();
const port = 3000

app.disable('x-powered-by');
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
