
import { useContext, useState } from 'react';
import NoteContext from './NoteContext';
import AlertContext from '../alerts/AlertContext';

const NoteState = (props) => {
  const alertcontext = useContext(AlertContext);
  const { showAlert } = alertcontext;

  const [notes, setnotes] = useState([]);

  const getNotes = async ()=>{
    const response = await fetch("http://localhost:5500/api/notes/getallnotes",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    });
    const notes = await response.json();
    setnotes(notes.notes.reverse())
  };

  // Add a note
  const addNote = async ({title, tag, description})=>{
    await fetch("http://localhost:5500/api/notes/addnote",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token'),
      },
      body: JSON.stringify({
        title: title,
        tag: tag,
        description: description
      })
    });
    getNotes();
  }
  // Delete a note
  const deleteNote = async(id)=>{
    await fetch(`http://localhost:5500/api/notes/deletenote/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token'),
      }
    });
    getNotes();
    showAlert('Deleted Successfully', 'success')
  }
  // Update a note
  const editNote = async(obj)=>{
    const { _id, title, tag, description } = obj;
    await fetch(`http://localhost:5500/api/notes/updatenote/${_id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token'),
      },
      body: JSON.stringify({title, tag, description})
    });
    getNotes();
    showAlert('Note Updated Successfully !', 'success')
  }
  
  return (
    <NoteContext.Provider value={{ notes, setnotes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState