import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import NotFound from './pages/NotFound';
import Apropos from './pages/A-propos';
import Header from './components/header';
import Footer from './components/Footer';
import './styles/NotFound.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/A-propos" element={<Apropos />} />
        <Route path="*" element={<NotFound />} /> {/* Route pour la page d'erreur */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;