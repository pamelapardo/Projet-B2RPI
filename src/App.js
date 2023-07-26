import './App.scss';
import AppLaunch from './components/componentApplications/appLaunch';
import Header from './components/header'
import Applications from "./pages/applications";
import Wiki from "./pages/wiki"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h100">
      <Header />
      <Routes>
        <Route path='/' element={<Applications />} exact />
        <Route path='wiki' element={<Wiki />} exact />
        <Route path='appLaunch' element={<AppLaunch />} exact />
      </Routes>
    </div>

  );
}

export default App;
