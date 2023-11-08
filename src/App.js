import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  return (<>
    <NoteState>
      <Navbar />
      <Alert message='This is amazing react app' type='info' />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </NoteState>
  </>);
}

export default App;
