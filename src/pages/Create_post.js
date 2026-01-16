import '../styles/createpost.css'
import { create_post } from '../endpoints/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

    const [caption, setCaption] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handlepost = async (e) => {
       e.preventDefault();
        try {
            await create_post(caption, description)
            navigate('/')
             
        } catch {
            alert('error creating post')
        } 
        
    }
  return (
    <div className="create-post-page">
      <h2>Create Post</h2>

      <form onSubmit={handlepost}>
        <div className="form-group">
          <label>Caption</label>
          <input required type="text" onChange={(e) => setCaption(e.target.value)} placeholder="Enter caption" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea required onChange={(e) => setDescription(e.target.value)} placeholder="Enter description"></textarea>
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
