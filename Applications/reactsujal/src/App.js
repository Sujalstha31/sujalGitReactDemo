import React, { useState } from 'react';
import './App.css';
import sunflowerImage from './sunflower.png'; // Import your sunflower image

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add login functionality here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <div className="background-image" style={{ backgroundImage: `url(${sunflowerImage})` }} />
      <h2 className="garden-title">Anu's Garden</h2>
      <div className="content">
        
        <div className="login-container">
          <form onSubmit={handleSubmit}>
           
        
          </form>
        </div>
        <div className="details-container">
       
          <p><strong>Location:</strong> Brampton</p>
          <p><strong>Description of Garden:</strong>These annual plants boast giant flowers, sometimes measuring more than a foot across. They make a good screen or backdrop and attract all sorts of pollinators. Some varieties have edible seeds. Most need staking to prevent them from falling over in the wind or rain. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
