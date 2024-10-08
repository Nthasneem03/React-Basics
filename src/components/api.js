import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

const Api = () => {
  const [user, setUser] = useState([]);

  async function fetchData() {
    const response = await fetch(url); // Fetch data from the API
    const users = await response.json(); // Parse the response to JSON
    setUser(users); // Update state with the fetched data
  }

  useEffect (() => {
    fetchData() ;
  }, []) 
  
  return (
    <>
      <div style={{ margin: '5rem' }}>
        <h1>Api + useEffect</h1>
      
      <ul>
        {user.map((user) => {
            return (
                <li key={user.id}>{user.login}</li> // Added key prop here
            );
        })}
      </ul>
        </div>
    </>
  );
};

export default Api;
