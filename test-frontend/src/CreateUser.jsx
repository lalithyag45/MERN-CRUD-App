import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit= (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/createUser", {name,email,age})
        .then(result => {
            console.log(result)
            navigate('/display')
        })
        .catch(err => console.log(err))
    }
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <form onSubmit={Submit} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create User</h2>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Age</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  onChange={(e) => setAge(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
              </div>
              <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Create</button>
            </form>
          </div>
        </div>
      );
      
}

export default CreateUser;
