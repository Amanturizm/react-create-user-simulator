import React, { useState } from 'react';
import './App.css';
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserForm />
    </div>
  );
};

export default App;
