
import {BrowserRouter as Router,Route,Switch, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import UploadFile from './Components/UploadFile';
import ConvertFile from './Components/ConvertFile';
import Home from './Components/Home';
function App() {
  return (
   <Router>
    <div>
      <Navigation/>
      <Routes>
      <Route path='/' exact Component={Home}></Route>
        <Route path='/upload' exact Component={UploadFile}></Route>
        <Route path='/convert' exact Component={ConvertFile}></Route>
      </Routes>
        
      
    </div>
   </Router>
  );
}

export default App;
