import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import NotFound from './pages/NotFound';
import Apropos from './pages/A-propos';
import Layout from './components/layout'; // Assurez-vous que le composant Layout est bien importé

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/A-propos" element={<Apropos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;