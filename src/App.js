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
import Metiers from './pages/adminOutlets/metiers';
import MetierAdmin from './pages/adminOutlets/metierAdmin';
import Administration from './pages/adminOutlets/administration';
import ModifiedPassword from './components/modifiedPassword';
import ConnexionAdmin from './components/connexionAdmin';
import ProfilsAdmin from './pages/adminOutlets/profilsAdmin';

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
          <Route path='*/metiers' element={<Metiers />} />
          <Route path='*/metier-admin' element={<MetierAdmin />} />
          <Route path='*/administration' element={<Administration />} />
        </Route>

      </Routes>

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