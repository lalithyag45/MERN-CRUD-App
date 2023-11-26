import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
function Signup(){
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/register',{name,email,password})
        .then(result => {
            console.log(result)
            navigate('/signin')})
        .catch(err => console.log(err))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>WELCOME APPlicants !!!</h1>
            <h1 style={{ marginBottom: '20px' }}>Register</h1>
        <form onSubmit ={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
            <label style={{ marginBottom: '8px', display: 'block' }}>Name</label>
            <input type='text' placeholder='Enter Name' style={{ width: '100%', padding: '8px', marginBottom: '16px' }} onChange = {(e)=>setname(e.target.value)}/>
            
            <label style={{ marginBottom: '8px', display: 'block' }}>Email</label>
            <input type='email' placeholder='Enter Email' style={{ width: '100%', padding: '8px', marginBottom: '16px' }} onChange = {(e)=>setemail(e.target.value)} />
            
            <label style={{ marginBottom: '8px', display: 'block' }}>Password</label>
            <input type='password' placeholder='Enter Password' style={{ width: '100%', padding: '8px', marginBottom: '16px'}} onChange = {(e)=>setpassword(e.target.value)}  />
            
            <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '16px' }}>Register</button>
            
        </form>
        
        <p style={{ marginBottom: '16px' }}>If already registered</p>
        <Link to="/signin" style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</Link>
          
        </div>
      );
      

}

export default Signup