import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const navigate = useNavigate();
  const notecontext = useContext(NoteContext);
  const { notes, getNotes, editNote } = notecontext;
  if(!localStorage.getItem('token')){
    navigate('/login')
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const closeModalRef = useRef(null)
  const [updatedNote, setupdatedNote] = useState({ title: "", tag: "", description: "" });

  const updateNote = (note) => {
    ref.current.click();
    setupdatedNote(note)
  };

  const handleChange = (e) => {
    setupdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    closeModalRef.current.click();
    editNote(updatedNote)
  }

  return (
    <div className='row my-3'> 
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control-plaintext" id="title" name="title" value={updatedNote.title} required onChange={handleChange} />
                    <label htmlFor="floatingEmptyPlaintextInput" style={{ fontSize: "120%", marginTop: "-5px" }}>Title</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control-plaintext" id="tag" name="tag" value={updatedNote.tag} required onChange={handleChange} />
                    <label htmlFor="floatingEmptyPlaintextInput" style={{ fontSize: "120%", marginTop: "-5px" }}>Tag</label>
                  </div>
                  <div className="form-floating">
                    <textarea className="form-control" name="description" id="floatingTextarea2" value={updatedNote.description} required style={{ height: "200px" }} onChange={handleChange}></textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={closeModalRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={updatedNote.title.length<3 || updatedNote.description.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>



      <h1>Your Notes</h1>
      {notes.length===0 && <h6 className='mx-5'>No Notes Available...</h6>}
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} updateNote={updateNote} />
      })}
    </div>
  )
}

export default Notes
