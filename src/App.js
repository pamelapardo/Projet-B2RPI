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
import MDEditorArticle from './components/mdEditorArticle';
import AppLaunch from './components/componentApplications/appLaunch';
import Login from '../src/components/login'
import AdminPages from './pages/adminPages';
import TableauDeBord from './pages/adminOutlets/tableauDeBord';
import GestionUtilisateurs from './pages/adminOutlets/gestionUtilisateurs';
import Metiers from './pages/adminOutlets/metiers';
import Administration from './pages/adminOutlets/administration';
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
        {/* Si la connexion est reussite alors affiche le Header  */}
        {!isLoggedIn && <Route path="/*" element={<Login onLoginSuccess={LoginSuccess} />} />}
        {isLoggedIn && (<Route path="/*" element={<Header />} />)}
      </Routes>
      <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/wiki/*" element={<Wiki/>}>
          <Route path="*" element={<WikiLanding />} />
          <Route path="*/all-articles" element={<WikiContent />} />
          <Route path="*/brouillons/" element={<WikiBrouillons />} />
          <Route path='*/redaction_article' element={<MDEditorArticle />} />
        </Route>
        <Route path='/profile/' element={<Profile />} />
        <Route path='/appLaunch' element={<AppLaunch />} />

        {/* PAGES ADMIN - Route temporaire */}
        <Route path='/admin-Tableau-de-bord/*' element={<AdminPages/>}>
          <Route default path='*/tableau-de-bord' element={<TableauDeBord/>}/>
          <Route path='*/gestion-de-utilisateurs' element={<GestionUtilisateurs/>}/>
          <Route path='*/metiers' element={<Metiers/>}/>
          <Route path='*/administration' element={<Administration/>}/>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
