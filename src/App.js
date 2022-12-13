import logo from './logo.svg';
import './App.css';
// import Header from '.components/Header.js';
import MainHeader from './components/MainHeader';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FilmList from './components/FilmList';
import Film from './components/Film';
import Actor from './components/Actor';

function App() {
  return (
    <Router> 
      <div className='app-padding'>
        <Link to={'/'}><MainHeader /></Link>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='filmlist' element={<FilmList />}>
            <Route path=':page' element={<FilmList />}></Route>
          </Route>
          <Route path='film'> 
            <Route path=':filmid' element={<Film />}></Route>
          </Route>
          <Route path='actor'>
            <Route path=':actorid' element={<Actor />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
