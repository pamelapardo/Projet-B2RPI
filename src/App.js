import './App.scss';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
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
import ProfilsAdmin from './pages/adminOutlets/profilsAdmin';
import Metiers from './pages/adminOutlets/metiers';
import MetierAdmin from './pages/adminOutlets/metierAdmin';
import Administration from './pages/adminOutlets/administration';
import ModifiedPassword from './pages/modifyPwd';
import WikiArticle from './pages/wikiOutlets/wikiArticle';
import MetiersSelected from './pages/adminOutlets/metierAdmin';

function App() {

  return (
    <div className="h100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ModifiedPassword />} />
      </Routes>

      <div className='restricted_size'>
      <Routes>
        <Route path='/admin-Tableau-de-bord/*' element={<AdminPages />}>
          <Route default path='*/tableau-de-bord' element={<TableauDeBord />} />
          <Route path='*/gestion-de-utilisateurs' element={<GestionUtilisateurs />} />
          <Route path='*/profil-de-utilisateur' element={<ProfilsAdmin />} />
          <Route path='*/profil-de-utilisateur/utilisateur-selected' element={<ProfilsAdmin/>} />
          <Route path='*/metiers' element={<Metiers />} />
          <Route path='*/metiers/metier-selected' element={<MetiersSelected />} />
          <Route path='*/administration' element={<Administration />} />
        </Route>
      </Routes>
      </div>
    
      <Routes>
        <Route path="/redirect/*" element={<Header/>}>
          <Route path="*/Application" element={<Applications />} />
          <Route path="*/wiki/*" element={<Wiki />}>
            <Route path="*" element={<WikiLanding />} />
            <Route path="*/all-articles" element={<WikiContent />} />
            <Route path="*/brouillons/" element={<WikiBrouillons />} />
            <Route path='*/redaction_article' element={<MDEditorArticle />} />
            <Route path='*/all-articles/article' element={<WikiArticle/>} />
          </Route>
          <Route path='*/profile' element={<Profile />} />
          <Route path='*/appLaunch' element={<AppLaunch />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
