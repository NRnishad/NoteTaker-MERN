import { ArrowLeftIcon, CloudSnow } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router'






function CreatePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
   if (!title.trim() || !content.trim()) {
      toast.error('Title and content cannot be empty.')
      return;
    }

    try {
      await axios.post('http://localhost:3001/api/notes', {
        title,content
      })
      toast.success('Note created successfully!')
      navigate('/')
    } catch (error) {
     if(error.response && error.response.status === 429){
        toast.error('You are being rate limited. Please try again later.')
        return;
      }
      toast.error('Failed to create note. Please try again later.')
      return;
    }finally{
      setLoading(false)
      setTitle('')
      setContent('')
    }
    
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto p-4 py-8'>
        <div className='max-w-2xl mx-auto '>
          <Link to="/" className='btn btn-ghost  mb-6'>
          <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>

          <div className='card bg-base-100 shadow-lg'>
              <div className='card-body'>
                  <h2 className='card-title'>Create New Note</h2>
                  <form onSubmit={handleSubmit} className='space-y-4'>
                      <div>
                          <label className='label'>
                              <span className='label-text'>Title</span>
                          </label>
                          <input
                              type='text'
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className='input input-bordered w-full'
                              
                          />
                      </div>
                      <div>
                          <label className='label'>
                              <span className='label-text'>Content</span>
                          </label>
                          <textarea
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                              className='textarea textarea-bordered w-full h-40'
                              
                          />
                      </div>
                      <button
                          type='submit'
                          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                          disabled={loading}
                      >
                          {loading ? 'Creating...' : 'Create Note'}
                      </button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage