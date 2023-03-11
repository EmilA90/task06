import React, { useState } from 'react';
import './index.css';


function Table({ users }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedData = users.sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = searchQuery
    ? sortedData.filter((item) =>
        item.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sortedData;

  return (
    <div>
      <div>
        <input type="text" onChange={handleSearch} />
        <button onClick={() => setSearchQuery('')}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortKey === 'id' && sortOrder === 'asc' && '↑'}
              {sortKey === 'id' && sortOrder === 'desc' && '↓'}
            </th>
            <th onClick={() => handleSort('fullName')}>
              FULLNAME {sortKey === 'fullName' && sortOrder === 'asc' && '↑'}
              {sortKey === 'fullName' && sortOrder === 'desc' && '↓'}
            </th>
            <th onClick={() => handleSort('email')}>
              EMAIL {sortKey === 'email' && sortOrder === 'asc' && '↑'}
              {sortKey === 'email' && sortOrder === 'desc' && '↓'}
            </th>
            <th onClick={() => handleSort('password')}>
              PASSWORD {sortKey === 'password' && sortOrder === 'asc' && '↑'}
              {sortKey === 'password' && sortOrder === 'desc' && '↓'}
            </th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
