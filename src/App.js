import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import About from './Pages/About';
import Contact from './Pages/Conatct'
import Schools from './Pages/Schools';
import StudentMenu from './Pages/StudentMenu';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SchoolSlug from './Pages/SchoolSlug';

function App() {
    return (
        <Router>
          <Navbar/>
            <Routes>
                <Route exact path="/" element={<MainHome/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/schools" element={<Schools/>} />
                <Route path="/schools/:id" element={<SchoolSlug/>} />
                <Route path="/student-menu" element={<StudentMenu/>} />
                </Routes>
                <Footer/>
        </Router>
    );
}

export default App;

