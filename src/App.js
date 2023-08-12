import './App.scss';
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Applications from './pages/applications';
import Wiki from './pages/wiki';
import WikiContent from './pages/wikiOutlets/wikiContent';
import WikiLanding from './pages/wikiOutlets/wikiLanding';

function App() {
  return (
    <div className="h100">
      <Header />
      <Routes>
        <Route path='/' element={<Applications/>}/>
        <Route path='/wiki/*' element={<Wiki/>}>
         <Route path='*' element={<WikiLanding/>} /> 
          <Route path='*/all-articles' element={<WikiContent />} /> 
          <Route path='*/brouillons/' element={<WikiContent/>}/>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
