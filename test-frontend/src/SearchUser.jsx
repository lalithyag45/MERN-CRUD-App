import React, { useState } from 'react';
import axios from 'axios';

const UserProfileSearch = () => {
  const [searchedName, setSearchedName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:8080/getUserByName/${searchedName}`)
    .then(response => {
      // Handle the response
      console.log(response);

      if (response.data === null) {
        setUser(null);
        setError('User not found');
      } else {
        setUser(response.data);
        setError(null);
      }
    })
    .catch(error => {
      // Handle the error
      console.log(error);
    });

    // if this code use "const handleSearch = async (e) => {"
    // try {
    //   // Make a request to your server to fetch user data based on the searchedName
    //   const response = await axios.get(`http://localhost:3001/getUserByName/${searchedName}`);
      
    //   // If user found, update state
    //   console.log(response);

    //   // Check if response.data is null
    //   if (response.data === null) {
    //     setUser(null);
    //     setError('User not found');
    //   } else {
    //     setUser(response.data);
    //     setError(null);
    //   }
    // } catch (err) {
    //   // If an error occurs, update state with error message
    //   console.log(err);
    // }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' ,maxWidth: '400px',margin: 'auto'}}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Enter Name:
        <input
          type="text"
          value={searchedName}
          onChange={(e) => setSearchedName(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
        />
      </label>
      <button
        onClick={handleSearch}
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Search
      </button>
  
      {user && (
        <div style={{ marginTop: '20px' }}>
          <h2>User Information</h2>
          <p>Name: {user.name}</p>
          <p>Password: {user.password}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
  
      {error && <h2><p style={{ color: 'red' }}>{error}</p></h2>}
    </div>
  );
  
};

export default UserProfileSearch;
