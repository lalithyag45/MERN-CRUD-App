import React, { useEffect,useState } from 'react';
import {Link} from "react-router-dom"; 
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([])

    // to display records on frontend
    useEffect(() => {
        axios.get('http://localhost:8080')
        .then(result =>{
          console.log(result)
           setUsers(result.data)
          })
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:8080/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to='/' style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px' }}>Add +</Link>
            <Link to="/search" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#008CBA', color: 'white', borderRadius: '5px' }}>Search</Link>

          </div>
      
          <table className='table' style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <tr>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Password</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => (
                  <tr key={user._id}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.name}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.email}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.password}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                      <Link to={`/update/${user._id}`} style={{ textDecoration: 'none', marginRight: '10px', padding: '5px', backgroundColor: '#008CBA', color: 'white', borderRadius: '3px' }}>Update</Link>
                      <button onClick={(e) => handleDelete(user._id)} style={{ padding: '5px', backgroundColor: '#FF5733', color: 'white', borderRadius: '3px', cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      );
      

  
}

export default Users;

