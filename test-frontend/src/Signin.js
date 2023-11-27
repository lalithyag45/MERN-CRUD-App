import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'


function Signin(){
 
  const [display,setdisplay]=useState('')
  const [booli,setbooli]=useState(false)
  const navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()


  const onSubmit =(e)=>{
    // e.preventDefault()
    const{name,email,password}=e

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
          <form onSubmit ={handleSubmit(onSubmit)} style={{ width: '300px', textAlign: 'center' }}>
            <label style={{ marginBottom: '8px', display: 'block' }}>Name</label>
            <input type='text' placeholder='Enter Name' style={{ width: '100%', padding: '8px', marginBottom: '16px' }} name="name" {...register("name",{
                required:true
            })}/>
            {errors.name && errors.name.type==="required" && <p style={{color:"red"}}>Name is required</p>}
           
            
            <label style={{ marginBottom: '8px', display: 'block' }}>Password</label>
            <input type='password' name="password" placeholder='Enter Password' style={{ width: '100%', padding: '8px', marginBottom: '16px'}}{...register("password",{
                required:true,
                validate:{
                    checkPattern:(value)=>{return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(value)}
                }
            })}/>
            {errors.password && errors.password.type==="required" && <p style={{color:"red"}}>Password is required</p>}
          
            <button type='submit' style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '16px' }}>SignIn</button>
            
        </form>

         
          {booli && display &&
          (<>
          <p>{display}</p>
          <Link to='/' style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</Link>
          </>)
          }
        </div>
      );
      

}

export default Signin