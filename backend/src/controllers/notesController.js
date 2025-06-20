import e from 'express';
import Note from '../models/Note.js';

export const getAllNotes =async (req, res) => {
   try{
    const notes = await Note.find();
    res.status(200).json(notes);
   }catch(error) {
    console.error(error);
       res.status(500).json({massage:'internal server error'});
   }
}
export const getNoteById = async (req, res) => {
    try {
        const {id}=req.params
        const note = await Note.findById(id);
        if(!note){
            return res.status(404).json({message:'note not found'})
        }
        res.status(200).json(note)

    } catch (error) {
        console.error('error getting note by id in controller',error);
       res.status(500).json({massage:'internal server error'});
    }
}
export const createNote = async (req, res) =>   {
 
 try {
    const{title,content}=req.body
    const newNote = new Note({title,content});
    const savedNote=await newNote.save()
    res.status(201).json(savedNote);
 } catch (error) {
     console.error('error getting note in controller',error);
       res.status(500).json({massage:'internal server error'});
 }
 
}


export const updateNote = async (req, res) => {
try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(id, { title, content },{ new: true });
    if(!updatedNote){
        return res.status(404).json({message:'Note not found'});
    }
    console.log('updatedNote', updatedNote);
    res.status(200).json(updatedNote);
} catch (error) {
     console.error('error in update note controller',error);
       res.status(500).json({massage:'internal server error'});
}
}


export const deleteNote = async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
          console.error('error in update note controller',error);
       res.status(500).json({massage:'internal server error'}); 
    }
}
    