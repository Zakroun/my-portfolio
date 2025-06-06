import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Menu from './Menu';
import logo from '../assets/images/zakaria3.png';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Zakaria Rouane" id="logo" loading="lazy" />
        <span id="name">ZAKARIA </span>
        <span id="name2"> ROUANE</span>
      </div>
      
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500} className="link">HOME</Link>
        <Link to="about" smooth={true} duration={500} className="link">ABOUT</Link>
        <Link to="skills" smooth={true} duration={500} className="link">SKILLS</Link>
        <Link to="resume" smooth={true} duration={500} className="link">RESUME</Link>
        <Link to="projects" smooth={true} duration={500} className="link">PROJECTS</Link>
        <Link to="contact" smooth={true} duration={500} className="link">CONTACT</Link>
      </nav>
      
      <button id="buttonmenu" onClick={toggleMenu}>
        <FaBars />
      </button>
      
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;