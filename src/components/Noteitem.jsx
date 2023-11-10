import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const notecontext = useContext(NoteContext)
  const { deleteNote } = notecontext;
  const { note, updateNote } = props;
  const { _id, title, description } = note;

  return (
    <div className='col-md-3 my-2'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <i className="fa-solid fa-trash  mx-2" onClick={() => { deleteNote(_id) }}></i>
          <i className="fa-solid fa-pen-to-square  mx-2" onClick={()=>{ updateNote(note) }}></i>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
