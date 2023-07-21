import './App.scss';
import Header from './components/header'
import Applications from "./pages/applications";
import Wiki from "./pages/wiki"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="h100">
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Applications/>} exact/>
          <Route path='wiki' element={<Wiki/>} exact/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
