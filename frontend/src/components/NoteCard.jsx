import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, TrashIcon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import { toast } from 'react-hot-toast'

function NoteCard({note,setNodes}) {

const deleteHandler = async (e,id) => {
    e.preventDefault()
    if (!window.confirm('Are you sure you want to delete this note?'))  return 
      
        
    try {
        await api.delete(`/notes/${id}`)
        setNodes((prevNotes) => prevNotes.filter((note) => note._id !== id))
        toast.success('Note deleted successfully!')
     
    } catch (error) {
        console.error('Error deleting note:', error)
        if (error.response && error.response.status === 429) {
            toast.error('You are being rate limited. Please try again later.')
            return;
        }
        toast.error('Failed to delete note. Please try again later.')
        // Handle error, e.g., show a toast notification
    }           
}





  return (
    <Link to={`/note/${note._id}`} className='card bg-base-100 hove:shadow-lg  transition-all duration-200 borde-t-4 border-solid border-[#00FF9D] '>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className=' card-actions justify-between mt-4 items-center'>
                <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>
                <div className='flex ithems-center gap-1'>
                <PenSquareIcon className='size-4'/>
                <button  className='btn btn-ghost btn-xs text-error' onClick={(e)=>deleteHandler(e,note._id)}>
                    <TrashIcon className='size-4'/>
                </button>
                </div>
            </div>
            

        </div>
        
    </Link>
  )
}

export default NoteCard