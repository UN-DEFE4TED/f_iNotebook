import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const notecontext = useContext(NoteContext);
    const { notes } = notecontext;
  return (
    <div className='row my-3'>
        <h1>Your Notes</h1>
        {notes.map((note)=>{
        return <Noteitem key={note._id} note={note} />
        })}
    </div>
  )
}

export default Notes
