import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        if (Array.isArray(response.data.users)) { 
          setUsers(response.data.users); 
        } else {
          console.error('API response does not contain an array of users:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>id</th> {}
            <th>firstName</th> {}
            <th>lastName</th>
            <th>email</th>
            <th>username</th>
            <th>domain</th>
            <th>ip</th>
            <th>university</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td> {}
              <td>{user.firstName}</td> {}
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
