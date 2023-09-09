import './login.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login(props) {
  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState('test');

  const handleLogin = (e) => {
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
        <button className='.common_btn' type="submit">Se connecter</button>
      </form>
      <Link to="/modifiedPassword">Mot de passe oublié?</Link>
    </div>
  );
}

export default Login;