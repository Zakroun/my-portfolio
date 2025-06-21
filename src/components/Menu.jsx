import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <motion.div 
      className={`menu ${isOpen ? 'open' : ''}`}
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? '0%' : '-100%' }}
      transition={{ type: 'tween', ease: 'easeInOut' }}
    >
      <button className="close-btn" onClick={toggleMenu}>
        <FaTimes />
      </button>
      
      <h1 className="menu-title">Menu</h1>
      
      <nav className="menu-links">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="menu-link" 
          onClick={toggleMenu}
        >
          HOME
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className="menu-link" 
          onClick={toggleMenu}
        >
          ABOUT
        </Link>
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          className="menu-link" 
          onClick={toggleMenu}
        >
          SKILLS
        </Link>
        <Link 
          to="resume" 
          smooth={true} 
          duration={500} 
          className="menu-link" 
          onClick={toggleMenu}
        >
          RESUME
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="menu-link" 
          onClick={toggleMenu}
        >
          PROJECTS
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="menu-link" 
          onClick={toggleMenu}
        >
          CONTACT
        </Link>
      </nav>
      
      {/* <div className="menu-social">
        <h3>My social profiles</h3>
        <div className="social-buttons">
          <a 
            href="https://github.com/Zakroun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/zakaryae-rouane-53086229a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Menu;