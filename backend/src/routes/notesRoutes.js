import express from 'express';
import { getNotes, createNote ,updateNote,deleteNote} from '../controllers/notesController.js';
const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);




export default router;

//f6P2UeGe5w7hbQZj
//nrnishad100
//mongodb+srv://<db_username>:<db_password>@cluster0.xj3uxcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0