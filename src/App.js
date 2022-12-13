import logo from './logo.svg';
import './App.css';
// import Header from '.components/Header.js';
import MainHeader from './components/MainHeader';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmList from './components/FilmList';

function App() {
  return (
    <Router> 
      <div className='app-padding'>
        <MainHeader />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/filmlist' element={<FilmList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
