import './login.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login(props) {
  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState('test');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer la logique d'authentification
    console.log('Logging in with:', email, password);

    if (email === 'test@test' && password === 'test') {
      // Connexion réussie
      props.onLoginSuccess();
    } else {
      // Connexion échouée
      console.log('Login ou mot de passe incorrect.');
    }
  };

  return (
    <div className="container">
      <h2>ARKHE</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn-Submit' type="submit">Se connecter</button>
      </form>
      <Link to="/forgot-password">Mot de passe oublié?</Link>
    </div>
  );
}

export default Login;