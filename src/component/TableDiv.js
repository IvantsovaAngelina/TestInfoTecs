import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; 
import ModalWindow from './ModalWindow';

function TableDiv() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = (query = '') => {
    const url = query
      ? `https://dummyjson.com/users/search?q=${query}`
      : 'https://dummyjson.com/users';
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка! Сообщение: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.users || data);
        setError(null);
      })
      .catch((error) => {
        console.error('Ошибка в получении списка пользователей:', error);
        setError('Не удалось обработать запрос. Попробуйте позже.'); 
      });
  };


  return (
    <main>
      <SearchBar onSearch={fetchUsers} />
      {error && <div className="error">{error}</div>} 
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