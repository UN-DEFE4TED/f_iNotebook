import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AlertContext from '../context/alerts/AlertContext';

const Addnote = () => {
    const alertcontext = useContext(AlertContext);
    const { showAlert } = alertcontext;

    const notecontext = useContext(NoteContext)
    const { addNote } = notecontext;

    const [note, setNote] = useState({ title: "", tag: "", description: "" });
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note);
        setNote({ title: "", tag: "", description: "" })
        showAlert("Note Created Successfully", "success")
    };

    return (
        <div>
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control-plaintext" id="title" name="title" value={note.title} required onChange={handleChange} />
                        <label htmlFor="floatingEmptyPlaintextInput" style={{ fontSize: "120%", marginTop: "-5px" }}>Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control-plaintext" id="tag" name="tag" value={note.tag} required onChange={handleChange} />
                        <label htmlFor="floatingEmptyPlaintextInput" style={{ fontSize: "120%", marginTop: "-5px" }}>Tag</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" name="description" id="floatingTextarea2" value={note.description} required style={{ height: "200px" }} onChange={handleChange}></textarea>
                        <label htmlFor="floatingTextarea2">Description</label>
                    </div>
                </div>
                <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default Addnote
