import React, { useState } from 'react';

function TableDiv() {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      gender: 'man',
      age: 32,
      phone: '+7987557766',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      gender: 'man',
      age: 42,
      phone: '+7987557766',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Anna Brown',
      gender: 'woman',
      age: 32,
      phone: '+7987557766',
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

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
            {data.map((item) => (
              <tr key={item.key}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TableDiv;