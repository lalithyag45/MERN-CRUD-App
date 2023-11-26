import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signin(){
  const [name,setname]=useState()
  const [password,setpassword]=useState()
  const [display,setdisplay]=useState('')
  const [booli,setbooli]=useState(false)
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.get(`http://localhost:8080/${name}`)
    .then(res=>{
      if(res.data.name===name)
      {
        setbooli(false)
        if(res.data.password===password)
        navigate('/display')
        else
        alert("Enter the correct password!!!!")

      }
      else
      {
        setbooli(true)
        setdisplay("User Doesnt Exist, please Register!!")
      }

    })
    .catch(err=>console.log(err))
  }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h1 style={{ marginBottom: '20px' }}>SignIn</h1>
          <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
            <label style={{ marginBottom: '8px', display: 'block' }}>Name</label>
            <input type='text' placeholder='Enter Name' style={{ width: '100%', padding: '8px', marginBottom: '16px' }} onChange = {(e)=>setname(e.target.value)}/>
          
            <label style={{ marginBottom: '8px', display: 'block' }}>Password</label>
            <input type='password' placeholder='Enter Password' style={{ width: '100%', padding: '8px', marginBottom: '16px'}} onChange = {(e)=>setpassword(e.target.value)}  />
            
            <button style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
          </form>
          {booli && display &&
          (<>
          <p>{display}</p>
          <Link to='/signup' style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</Link>
          </>)
          }
        </div>
      );
      

}

export default Signin