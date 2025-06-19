import express from 'express';
import { getNotes, createNote } from '../controllers/notesController.js';
const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);




export default router;

//f6P2UeGe5w7hbQZj
//nrnishad100
//mongodb+srv://<db_username>:<db_password>@cluster0.xj3uxcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0