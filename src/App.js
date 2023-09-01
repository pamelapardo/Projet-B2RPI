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
import Todo from './components/componentApplications/firebaseTest';

function App() {
  return (
    <div className="h100">
      <Header/>
      <Routes>
        <Route path='/' element={<Applications/>}/>
        <Route path='/wiki/*' element={<Wiki/>}>
         <Route path='*' element={<WikiLanding/>} /> 
          <Route path='*/all-articles' element={<WikiContent />} /> 
          <Route path='*/brouillons/' element={<Todo/>}/>
          <Route path='*/redaction_article' element={<MDEditorArticle/>}/>
        </Route>
        <Route path='/profile/' element={<Profile/>}/>
        <Route path='/appLaunch' element={<AppLaunch/>}/>
        
      </Routes>
    </div>

  );
}

export default App;
