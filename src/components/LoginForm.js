import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault();

    const authObject = {
      'Project-ID': '63505050-778f-4723-9710-aff7f775f6bf',
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload()
     
      
      setError('')
    } catch (error) {
        setError('Oops, incorrect Credentials')
    }
  };



  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
