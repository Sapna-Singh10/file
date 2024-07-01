import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBconnection from './database/db.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use ('/', router);

const PORT = 10000;

DBconnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
