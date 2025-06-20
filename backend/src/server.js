import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();


connectDB();


// Middleware
app.use(express.json());
app.use('/api/notes', notesRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost: '+process.env.PORT);
});


