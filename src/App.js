import Header from './components/Header/header';
import './App.css';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project'; 
import Contact from './pages/Contact';
import Skill from './pages/Skill';
import SectionContact from './components/SectionContact/SectionContact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skill' element={<Skill/>}/>
      </Routes>
    </div>
  );
}

export default App;
