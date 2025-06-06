import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Home = () => {
  const [name, setName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "ZAKARYAE ROUANE",
    "Zakroun"
  ];

  useEffect(() => {
    let timeout;
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && name.length < currentText.length) {
      timeout = setTimeout(() => {
        setName(currentText.substring(0, name.length + 1));
      }, 200);
    } else if (!isDeleting && name.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && name.length > 0) {
      timeout = setTimeout(() => {
        setName(name.substring(0, name.length - 1));
      }, 100);
    } else if (isDeleting && name.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }
    
    return () => clearTimeout(timeout);
  }, [name, isDeleting, currentTextIndex]);

  return (
    <section id="home" className="home-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="username"
      >
        <h2 id="hello">Hello I'm</h2>
        <span id="username">{name}</span>
        <span id="iconafter">|</span>
        <h3>web developer</h3>
        <Link to="contact" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="btncontact"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;