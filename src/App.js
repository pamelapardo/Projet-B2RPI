import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header';
import { Routes, Route, Navigate } from 'react-router-dom'; // Ajoutez Navigate pour la redirection
import Applications from './pages/applications';
import Wiki from './pages/wiki';
import WikiContent from './pages/wikiOutlets/wikiContent';
import WikiLanding from './pages/wikiOutlets/wikiLanding';
import Profile from './pages/profile';
import WikiBrouillons from './pages/wikiOutlets/wikiBrouillons';
import MDEditorArticle from './components/mdEditorArticle';
import AppLaunch from './components/componentApplications/appLaunch';
import Login from '../src/components/login';
import AdminPages from './pages/adminPages';
import TableauDeBord from './pages/adminOutlets/tableauDeBord';
import GestionUtilisateurs from './pages/adminOutlets/gestionUtilisateurs';
import Metiers from './pages/adminOutlets/metiers';
import Administration from './pages/adminOutlets/administration';
import ModifiedPassword from './components/modifiedPassword';
import ConnexionAdmin from './components/connexionAdmin';
import ProfilsAdmin from './pages/adminOutlets/profilsAdmin';

function App(props) {
  // Gestion du changement de status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);

  // Fonction pour savoir si la connexion est réussie et stocker le rôle
  const LoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const LoginSuccessAdmin = () => {
    setIsLoggedInAdmin(true);
  };

  return (
    <div className="h100">

      <Routes>
        {/* Si la connexion est réussie alors affiche le Header */}
        {!isLoggedIn ? (
          <Route path="/" element={<Login onLoginSuccess={LoginSuccess} />} />
        ) : (
          <Route path="/*" element={<Header />} />
        )}
      </Routes>
      <Routes>
        {isLoggedIn && ( // Afficher les routes protégées uniquement si l'utilisateur est connecté
          <>
            <Route path="/" element={<Applications />} />
            <Route path="/wiki/*" element={<Wiki />}>
              <Route path="*" element={<WikiLanding />} />
              <Route path="*/all-articles" element={<WikiContent />} />
              <Route path="*/brouillons/" element={<WikiBrouillons />} />
              <Route path='*/redaction_article' element={<MDEditorArticle />} />
            </Route>
            <Route path='/profile/' element={<Profile />} />
            <Route path='/appLaunch' element={<AppLaunch />} />
            
        {/* PAGES ADMIN - Route temporaire */}
        {isLoggedInAdmin === 'admin@mail.com' && ( // Afficher les routes admin uniquement si l'utilisateur a le rôle d'admin
          <Route path='/admin-Tableau-de-bord/*' element={<AdminPages />}>
            <Route default path='*/tableau-de-bord' element={<TableauDeBord />} />
            <Route path='*/gestion-de-utilisateurs' element={<GestionUtilisateurs />} />
            <Route path='*/profil-de-utilisateur' element={<ProfilsAdmin />} />
            <Route path='*/metiers' element={<Metiers />} />
            <Route path='*/administration' element={<Administration />} />
          </Route>
        )}
      </>
        )}
    </Routes>
    </div >
  );
}

export default App;