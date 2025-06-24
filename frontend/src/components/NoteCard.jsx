import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

function NoteCard({note}) {
  return (
    <Link to={`/note/{$note._id}`} className='card bg-base-100 hove:shadow-lg  transition-all duration-200 borde-t-4 border-solid border-[#00FF9D] '>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className=' card-actions justify-between mt-4 items-center'>
                <span className='text-sm text-base-content/60'>{note.content}</span>
                <div className='flex ithems-center gap-1'>
                <PenSquareIcon className='size-4'/>
                <button className='btn btn-ghost btn-xs text-error'>
                    <TrashIcon className='size-4'/>
                </button>
                </div>
            </div>
            

        </div>
        
    </Link>
  )
}

export default NoteCard