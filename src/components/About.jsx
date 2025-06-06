import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/images/zakaria1.png';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">ABOUT ME</h2>
      <hr className="section-divider" />
      
      <div className="about-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <img 
            src={profileImage} 
            alt="Zakaryae Rouane" 
            className={`profile-img ${inView ? 'animate' : ''}`} 
            loading="lazy"
          />
        </motion.div>
        
        <div className="about-text">
          <h1>Hi there! I'm Zakaryae Rouane</h1>
          <h3 className="subtitle">Web Developer</h3>
          <p className="description">
            As a second-year intern at ISTAG Bab Tizimi in full-stack web development, 
            I have gained practical experience through a variety of projects. This role 
            has enabled me to apply my technical skills in real-world scenarios while 
            keeping up with the latest advancements in technology to ensure I am always 
            learning and adapting to industry trends.
          </p>
          
          <div className="info-table">
            <div className="info-row">
              <span className="info-label">Phone</span>
              <span className="info-separator">:</span>
              <span className="info-value">+212 618 382 385</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-separator">:</span>
              <span className="info-value">zakaryaerouane@gmail.com</span>
            </div>
            <div className="info-row">
              <span className="info-label">From</span>
              <span className="info-separator">:</span>
              <span className="info-value">Meknes/Morocco</span>
            </div>
            <div className="info-row">
              <span className="info-label">Language</span>
              <span className="info-separator">:</span>
              <span className="info-value">Français, Arabe, Anglais</span>
            </div>
          </div>
          
          <motion.a 
            href="https://black-kissee-92.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="download-btn"
          >
            Download CV <FaDownload />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;