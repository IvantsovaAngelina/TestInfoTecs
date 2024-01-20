import React, { useState, useEffect} from 'react';

function TableDiv() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUser = () => {
      fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data.users);
        })
        .catch(error => console.error('Error fetching users:', error));
    };

    getAllUser();
  }, []); 

  console.log(users)

  return (
    <main>
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
                <td>{item.firstName} {item.lastName} {item.maidenName}</td>
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