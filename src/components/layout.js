import React from 'react';
import Header from './header';
import Footer from './Footer';
import '../styles/pages/layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;