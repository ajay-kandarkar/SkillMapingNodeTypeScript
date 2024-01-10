import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/userRoutes';

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use('/', router);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
