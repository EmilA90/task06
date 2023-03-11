import React, { useState } from 'react';
import './index.css';


function Form({ addUser }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      fullName,
      email,
      password,
    };
    addUser(user);
    setFullName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setShowPasswords(false);
    setIsValid(false);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValid(event.target.value === repeatPassword);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    setIsValid(event.target.value === password);
  };

  const handleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  return (
    <form onSubmit={handleSubmit} className="form" >
      <div>
        <label htmlFor="full-name">Full Name:</label>
        <input
          id="full-name"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type={showPasswords ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="button" onClick={handleShowPasswords}>
          {showPasswords ? 'Hide' : 'Show'}
        </button>
      </div>
      <div>
        <label htmlFor="repeat-password">Repeat Password:</label>
        <input
          id="repeat-password"
          type={showPasswords ? 'text' : 'password'}
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          required
        />
        {isValid ? <span>Passwords match</span> : <span>Passwords do not match</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
