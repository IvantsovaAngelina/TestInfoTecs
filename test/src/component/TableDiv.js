import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; 

function TableDiv() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = (query = '') => {
    const url = query
      ? `https://dummyjson.com/users/search?q=${query}`
      : 'https://dummyjson.com/users';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || data); 
      })
      .catch((error) => console.error('Error fetching users:', error));
  };

  return (
    <main>
      <SearchBar onSearch={fetchUsers} />
      <div className="tableDiv">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Возраст</th>
              <th>Пол</th>
              <th>Номер телефона</th>
              <th>Адрес</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>
                  {item.address.address}, {item.address.city}, {item.address.state} {item.address.postalCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TableDiv;