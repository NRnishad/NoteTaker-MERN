
import { useParams, useNavigate ,Link} from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../lib/axios';
import { toast } from 'react-hot-toast';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";


function NoteDetailPage() {
  const [note, setNote] =useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  // Fetch note details by ID
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error('Error fetching note:', error);
        if (error.response && error.response.status === 429) {
          toast.error('You are being rate limited. Please try again later.');
        } else {
          toast.error('Failed to fetch note. Please try again later.');
        }
      }finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);
 if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Title and content cannot be empty.');
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success('Note updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating note:', error);
      if (error.response && error.response.status === 429) {
        toast.error('You are being rate limited. Please try again later.');
      } else {
        toast.error('Failed to update note. Please try again later.');
      }
    } finally {
      setSaving(false);
    }
  }
  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success('Note deleted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error deleting note:', error);
      if (error.response && error.response.status === 429) {
        toast.error('You are being rate limited. Please try again later.');
      } else {
        toast.error('Failed to delete note. Please try again later.');
      }
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage