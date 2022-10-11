import './App.css';
import Home from './components/Home';
import {Persons} from './components/Persons';
import { Route,Routes, Link } from 'react-router-dom';

function App() {
  return (
   
    <div className="App">
      <nav className="navbar navbar-expand-sm- ng-light navbar-dark">
<ul className="navbar-nav">
  <li className="nav-item- m-1">
    <Link className="btn btn-light btn_outline-primary" to = "/Home">
      Home
    </Link>
    <Link className="btn btn-light btn_outline-primary" to = "/Persons">
    Persons
    </Link>
  
  </li>

</ul>

      </nav>
      <Routes>
        <Route path='/Home'  element={ <Home/> } />
        <Route path='/Persons' element={ <Persons/> }/>

        
      </Routes>
    
    </div>
   
  );
}

export default App;
