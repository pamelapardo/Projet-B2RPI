import './login.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Importez Firestore
import { auth, } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.email === 'admin@mail.com') {
          const user = userCredential.user.email;
          navigate("/admin-Tableau-de-bord/*/tableau-de-bord")
          console.log(user, 'Auth admin')
        } else {
          navigate("/redirect/*/Application")
          console.log("Auth client")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }

  return (
    <div className="container">
      <h2>ARKHE</h2>
      <form>
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
        <Link onClick={onLogin} className='btn-Submit' type="submit">Se connecter</Link>
      </form>
      <Link to="/forgot-password">Mot de passe oublié?</Link>
    </div>
  );
}

export default Login;
