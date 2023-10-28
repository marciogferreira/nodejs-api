import express from 'express';
import cors from 'cors';

import PublicRoutes from './routes/PublicRoutes.js';
import PrivateRoutes from './routes/PrivateRoutes.js';

const app = express();

app.use(cors());
app.use(express.json())
app.use(PublicRoutes);
app.use(PrivateRoutes);

app.listen(8000, () => {
    console.log("HTTP");
})