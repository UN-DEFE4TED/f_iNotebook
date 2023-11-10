import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AlertContext from './context/alerts/AlertContext';
import { useContext } from 'react';

function App() {
  const alertcontext = useContext(AlertContext)
  const { alert } = alertcontext;
  if (!localStorage.getItem('token')) {
    Navigate('/login')
  }
  return (<>
      <Navbar />
      <Alert alert={alert} />
      <NoteState>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
      </NoteState>
  </>);
}

export default App;