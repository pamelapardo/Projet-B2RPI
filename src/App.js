import React, { useState } from 'react';
import './App.scss';
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Applications from './pages/applications';
import Wiki from './pages/wiki';
import WikiContent from './pages/wikiOutlets/wikiContent';
import WikiLanding from './pages/wikiOutlets/wikiLanding';
import Profile from './pages/profile';
import WikiBrouillons from './pages/wikiOutlets/wikiBrouillons';
function App() {
  //Gestion du  changement de status 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Fonction pour savoir si la connexion est reussite 
  const LoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="h100">
      <Header />
      <Routes>
        <Route path='/' element={<Applications/>}/>
        <Route path='/wiki/*' element={<Wiki/>}>
         <Route path='*' element={<WikiLanding/>} /> 
          <Route path='*/all-articles' element={<WikiContent />} /> 
          <Route path='*/brouillons/' element={<WikiBrouillons/>}/>
        </Route>
        <Route path='/profile/' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
