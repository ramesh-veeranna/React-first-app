import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <>
        <Router>
            <Navbar/>            
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/users/:userId' element={<UserDetails/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
