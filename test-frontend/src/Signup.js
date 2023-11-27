import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'


function Signup(){
    // const [name,setname]=useState()
    // const [email,setemail]=useState()
    // const [password,setpassword]=useState()
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit =(e)=>{
        const{name,email,password}=e
        axios.post('http://localhost:8080/register',{name:name,email:email,password:password})
        .then(result => {
            console.log(result)
            navigate('/signin')})
        .catch(err => {console.log(err)
            if(err.code==="ERR_BAD_REQUEST")
            alert("Duplicate Email")
        })

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>WELCOME APPlicants !!!</h1>
          <Link to='/display' style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Home</Link>

            <h1 style={{ marginBottom: '20px' }}>Register</h1>
            <form onSubmit ={handleSubmit(onSubmit)} style={{ width: '300px', textAlign: 'center' }}>
            <label style={{ marginBottom: '8px', display: 'block' }}>Name</label>
            <input type='text' placeholder='Enter Name' style={{ width: '100%', padding: '8px', marginBottom: '16px' }} name="name" {...register("name",{
                required:true
            })}/>
            {errors.name && errors.name.type==="required" && <p style={{color:"red"}}>Name is required</p>}
            
            <label style={{ marginBottom: '8px', display: 'block' }}>Email</label>
            <input type='email' placeholder='Enter Email' style={{ width: '100%', padding: '8px', marginBottom: '16px' }} name="email" {...register("email",{
                required:true,
                validate:{
                    checkPattern:(value)=>{return /^[^@\s]+@+[^@\s]+\.+[^@\s]{2,6}$/.test(value)}
                }
            })} />
            {errors.email && errors.email.type==="required" && <p style={{color:"red"}}>Email is required</p>}
            {errors.email && errors.email.type==="checkPattern" && <p style={{color:"red"}}>Email didnt match requirement</p>}



            
            <label style={{ marginBottom: '8px', display: 'block' }}>Password</label>
            <input type='password' name="password" placeholder='Enter Password' style={{ width: '100%', padding: '8px', marginBottom: '16px'}}{...register("password",{
                required:true,
                validate:{
                    checkPattern:(value)=>{return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(value)}
                }
            })}/>
            {errors.password && errors.password.type==="required" && <p style={{color:"red"}}>Password is required</p>}
            {errors.password && errors.password.type==="checkPattern" && <p style={{color:"red"}}>Password didnt match requirement</p>}

          
            <button type='submit' style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '16px' }}>Register</button>
            
        </form>
        {/* <div style={{display:"flex", alignItems:"center"}}>
            <input type='checkbox' name="Accept Terms" style={{ width: '100%', padding: '8px', marginBottom: '10px', marginLeft:"-70px"}} required  />
            <label style={{ marginBottom: '8px', marginLeft:"-120px", display: 'block' }}>Accept terms</label>

           </div> */}
        
        <p style={{ marginBottom: '16px' }}>If already registered</p>
        <Link to="/signin" style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</Link>
          
        </div>
      );
      

}

export default Signup