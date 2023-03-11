import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newUser = {
      id: Math.random(),
      ...user,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      <Table users={users} />
    </div>
  );
}

export default App;
