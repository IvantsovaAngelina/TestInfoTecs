import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; 
import ModalWindow from './ModalWindow';

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
        <table className="tableUser">
          <thead>
            <tr className='titleBody'>
              <th>ФИО</th>
              <th>Возраст</th>
              <th>Пол</th>
              <th>Номер телефона</th>
              <th>Адрес</th>
              <th>Подробнее</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName} {item.lastName} {item.maidenName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>
                  {item.address.address}, {item.address.city}
                </td>
                <td>
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#user${item.id}`}>Подробнее</button>
                  <ModalWindow 
                        id={item.id} 
                        firstName={item.firstName} 
                        lastName={item.lastName} 
                        maidenName={item.maidenName} 
                        age={item.age} 
                        gender={item.gender}
                        phone={item.phone} 
                        city={item.address.city}  
                        address={item.address.address}
                        email={item.email}
                        weight={item.weight}
                        height={item.height}
                    />
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