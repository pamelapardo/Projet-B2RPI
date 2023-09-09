import './login.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './auth'; // Importez le service d'authentification de votre fichier auth.js

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Utilisez le service d'authentification importé pour vous connecter
      const userCheck = await signInWithEmailAndPassword(auth, email, password);
      // Connexion réussie
      console.log('Logged in as:', userCheck.user.email);
      props.onLoginSuccess();
    } catch (error) {
      // Gérer les erreurs d'authentification
      console.error('Login failed:', error.message);
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