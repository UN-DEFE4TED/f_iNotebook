import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../context/alerts/AlertContext';

const Login = () => {
    const alertcontext = useContext(AlertContext);
    const { showAlert } = alertcontext;

    const navigate = useNavigate();
    const [user, setuser] = useState({email: "", password: ""})
    const handleChange = (e)=>{
        setuser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5500/api/auth/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": user.email,
                "password": user.password
            })
            });
          const json = await response.json();
          if (json.status==='success') {
            localStorage.setItem('token', json.data.token)
            navigate('/')
            showAlert('Login Successfully', 'success')
          }else{
            showAlert(json.message, 'danger')
          }
    }
    return (
        <div>
            <h2 className='mb-5'>Please Login To Continue</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={user.email} type="text" name='email' className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input value={user.password} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
