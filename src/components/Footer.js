import React from 'react';
import '../styles/footer.scss';
import logoBW from "../styles/images/logoKasaBW.png"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoBW} alt="Kasa LogoBW" className="logoBW" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;