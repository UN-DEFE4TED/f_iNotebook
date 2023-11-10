import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertContext from '../context/alerts/AlertContext';

const Signup = () => {
    const { showAlert } = useContext(AlertContext);
    const navigate = useNavigate();
    const [user, setuser] = useState({name: "", email: "", password: ""})
    const handleChange = (e)=>{
        setuser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5500/api/auth/signup",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": user.name,
                "email": user.email,
                "password": user.password
            })
            });
          const json = await response.json();
        //   const USERTOKEN = json.data.token;
        //   console.log(USERTOKEN);
          if (json.status==='success') {
            localStorage.setItem('token', json.data.token)
            navigate('/')
            showAlert('User Created Successfully', 'success')
          }else{
            showAlert(json.message, 'danger')
          }
    }
    return (
        <div>
            <h2 className='mb-5'>Create An Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input value={user.name} type="text" name='name' required className="form-control" id="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={user.email} type="text" name='email' required className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={user.password} type="password" name='password' required minLength={5} className="form-control" id="password" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" name='password' className="form-control" required id="cpassword"/>
                </div>
                <div className="mb-3 form-check">
                    <input  type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Signup
