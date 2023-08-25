import React, { useState } from 'react';
import './App.scss';
import Login from './components/login'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Applications from './pages/applications';
import Wiki from './pages/wiki';
import WikiContent from './pages/wikiOutlets/wikiContent';
import WikiLanding from './pages/wikiOutlets/wikiLanding';
import Profile from './pages/profile';

function App() {
  //Gestion du  changement de status 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Fonction pour savoir si la connexion est reussite 
  const LoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="h100">
      <Routes>
        {/* Si la connexion est reussite alors affiche le Header  */}
        {!isLoggedIn && <Route path="/*" element={<Login onLoginSuccess={LoginSuccess} />} />}
        {isLoggedIn && <Header />}
        <Route path="/" element={<Applications />} />
        <Route path="/wiki/*" element={<Wiki />}>
          <Route path="*" element={<WikiLanding />} />
          <Route path="*/all-articles" element={<WikiContent />} />
          <Route path="*/brouillons/" element={<WikiContent />} />
        </Route>
        <Route path="/profile/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
