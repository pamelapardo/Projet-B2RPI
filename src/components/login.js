import './login.scss';
import React, { useState } from 'react';
import { Link, Navigate, Route } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importez le service d'authentification de votre fichier auth.js

function Login(props) {
  // Déclarer l'etat de email  
  const [email, setEmail] = useState('');
  // Déclarer l'etat du mot de passe 
  const [password, setPassword] = useState('');

  // Envoie du formulaire 
  const handleLogin = async (e) => {
    // Empecher le rafraichissement de la page 
    e.preventDefault();

    try {
      // Utilisez le service d'authentification importé pour vous connecter
      const userCheck = await signInWithEmailAndPassword(auth, email, password);

      // Vérifiez si l'utilisateur est administrateur (adapté à votre structure de données)
      if (userCheck.user.email === 'admin@mail.com' && userCheck.user.isAdmin) {
        // Redirigez l'administrateur vers la page admin
        return <Navigate to='/admin-Tableau-de-bord/*'/>;
      }

      // Connexion réussie pour un utilisateur normal
      console.log('Logged in as user:', userCheck.user.email);
      props.onLoginSuccess();
    } catch (error) {
      // Gérer les erreurs d'authentification
      console.error('Login failed:', error.message);
    }
  };


  return (
    <div className="container">
      <h2>ARKHE</h2>
       <p>Connexion Utilisateur </p>
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
        <br/>
      <Link to="/modifiedPassword">Mot de passe oublié?</Link>
      </form>
      <Link to="/loginAdmin">Se connecter en tant qu’administrateur </Link>
    </div>
  );
}

export default Login;