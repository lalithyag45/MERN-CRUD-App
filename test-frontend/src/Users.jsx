import React, { useEffect,useState } from 'react';
import {Link} from "react-router-dom"; 
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([])

    // to display records on frontend
    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }

  return (
    <div>
      <div>
      <Link to='/create'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                            return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to={`/update/${user._id}`}>Update</Link>
                                <button  
                                onClick={(e)=> handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;

