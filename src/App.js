import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <li>
              <NavLink to="/Home" >Home</NavLink>
            </li>
            <li>
            <NavLink to="/Support" >Suppport</NavLink>
            </li>
            <li>
            <NavLink to="/About" >Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/Labs" >Labs</NavLink>
          </li>
         
          </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* index specifies that Home is default route */}
          <Route index element={<Home/>} />
          <Route path="/Support" element={ <Support/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Labs" element={<Labs/>} />
          <Route path="*" element={ <NotFound /> } />
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
