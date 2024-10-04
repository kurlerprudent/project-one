import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import About from './Pages/About';
import Contact from './Pages/Conatct'
import Schools from './Pages/Schools';
import StudentMenu from './Pages/StudentMenu';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainHome/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/schools" element={<Schools/>} />
                <Route path="/student-menu" element={<StudentMenu/>} />
                </Routes>
        </Router>
    );
}

export default App;

