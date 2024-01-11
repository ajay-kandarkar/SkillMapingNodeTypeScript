import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/UserRoutes';
const cors = require('cors');
const app = express();
app.use(cors());
const port =  process.env.PORT || 8081;
app.use(bodyParser.json());
app.use('/', router);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
