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
export const createNote = async (req, res) =>   {
 
 try {
    const{title,content}=req.body
    const newNote = new Note({title,content});
    await newNote.save()
    res.status(201).json({massage:'note created successfully'});
 } catch (error) {
     console.error('error getting note in controller',error);
       res.status(500).json({massage:'internal server error'});
 }
}
    