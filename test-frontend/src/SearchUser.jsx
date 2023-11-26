import React, { useState } from 'react';
import axios from 'axios';

const UserProfileSearch = () => {
  const [searchedName, setSearchedName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:3001/getUserByName/${searchedName}`)
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
    <div>
      <label>
        Enter Name:
        <input
          type="text"
          value={searchedName}
          onChange={(e) => setSearchedName(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h2>User Information</h2>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      {error && <h2><p>{error}</p></h2>}
    </div>
  );
};

export default UserProfileSearch;
