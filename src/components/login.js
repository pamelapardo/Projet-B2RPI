import './login.scss';
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importez le service d'authentification de votre fichier auth.js
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Importez Firestore

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Utilisez le service d'authentification importé pour vous connecter
      const userCheck = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in as:', userCheck.user.email);

      // Récupérez le rôle de l'utilisateur depuis Firestore
      const db = getFirestore();
      const userDocRef = doc(db, 'roles', userCheck.user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userRole = userDocSnap.data().role;
        console.log('User role:', userRole);

        // Maintenant, vous avez le rôle de l'utilisateur
        // et vous pouvez l'utiliser pour contrôler l'accès aux pages ou fonctionnalités spécifiques.
        // Par exemple, redirigez l'utilisateur en fonction de son rôle :
        if (userRole === 'admin') {
          // return <Route to="/admin-Tableau-de-bord/*" />;
          props.history.push('/admin');
        } else {
          // return <Route to="/*" />;
          props.history.push('/dashboard');
        }
        
        props.onLoginSuccess();
      } else {
        // Le document Firestore associé à l'utilisateur n'existe pas
        // Gérez ce cas en conséquence
      }
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
