import Note from '../models/Note.js';

export const getNotes =async (req, res) => {
   try{
    const notes = await Note.find();
    res.status(200).json(notes);
   }catch(error) {
    console.error(error);
       res.status(500).json({massage:'internal server error'});
   }
}
export const createNote = (req, res) => {
    res.status(201).send('Note created successfully');
}