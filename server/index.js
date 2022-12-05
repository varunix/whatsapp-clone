import express from 'express';

import Connection from './database/db.js';

const app = express();

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))