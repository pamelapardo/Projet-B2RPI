import './App.scss';
import Header from './components/header'

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h100">
      <Header />
      <Outlet/>
    </div>

  );
}

export default App;
