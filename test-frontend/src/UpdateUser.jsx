import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

function UpdateUser() {

    const{id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8080/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    },[])

    const Update =(e) => {
        e.preventDefault();
        axios.put("http://localhost:8080/updateUser/"+id, {name,email,age})
        .then(result => {
            console.log(result)
            navigate('/display')
        })
        .catch(err => console.log(err))
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <form onSubmit={Update} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Update User</h2>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Age</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
              </div>
              <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Update</button>
            </form>
          </div>
        </div>
      );
      
}

export default UpdateUser;
