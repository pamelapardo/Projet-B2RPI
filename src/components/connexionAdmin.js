import './login.scss';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importez le service d'authentification de votre fichier auth.js

function ConnexionAdmin(props) {
  // Déclarer l'etat de email  
  const [email, setEmail] = useState('');
  // Déclarer l'etat du mot de passe 
  const [password, setPassword] = useState('');

  const handleLoginAdmin = async (e) => {
    e.preventDefault();
  
    try {
      const userCheckAdmin = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in as:", userCheckAdmin.user.email);
      // Appeler la fonction de succès transmise via les props
      props.onLoginSuccessAdmin();
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="container">
      <h2>ARKHE</h2>
       <p>Connexion Administrateur </p>
      <form onSubmit={handleLoginAdmin}>
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
      <Link to="/">Se connecter en tant qu’utilisateur </Link>
    </div>
  );
}
export default ConnexionAdmin;
