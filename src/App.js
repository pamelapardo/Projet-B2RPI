import './App.scss';
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Applications from './pages/applications';
import Wiki from './pages/wiki';
import WikiContent from './pages/wikiOutlets/wikiContent';

function App() {
  return (
    <div className="h100">
      <Header />
      <Routes>
        <Route path='/' element={<Applications/>}/>
        <Route path='/wiki/*' element={<Wiki/>}>
          <Route path='content' element={<WikiContent/>}/>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
