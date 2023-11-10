import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'

const Home = () => {
return (
    <div>
        <h1 className="App mb-3" style={{color: "#082a4a"}}>This is iNotebook</h1>
        <Addnote />
        <Notes />
    </div>
  )
}

export default Home
