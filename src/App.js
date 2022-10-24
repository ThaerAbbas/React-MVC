import './App.css';
import Home from './components/Home';
import {Persons} from './components/Persons';
import { Route,Routes, Link } from 'react-router-dom';
import {Country} from './components/Country';
import {Language} from './components/Language';
import {NewPerson} from './components/NewPerson';



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
    <Link className="btn btn-light btn_outline-primary" to = "/Country">
    Country
    </Link>
    <Link className="btn btn-light btn_outline-primary" to = "/Language">
    Language
    </Link>
  
  </li>

</ul>

      </nav>
      <Routes>
        <Route path='/Home'  element={ <Home/> } />
        <Route path='/Persons' element={ <Persons/> }/>
        <Route path='/Country'  element={ <Country/> } />
        <Route path='/Language' element={ <Language/> }/>
        <Route path='/NewPerson' element={ <NewPerson/> }/>
       

        
      </Routes>
    
    </div>
   
  );
}

export default App;