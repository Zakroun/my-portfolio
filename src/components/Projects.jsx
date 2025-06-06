import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import perfum3otor from '../assets/images/3otor.png';
import Docsaura from '../assets/images/Docsaura.png';
import gaza from '../assets/images/Gaza.png';
const projects = [
  {
    title: "3otor",
    image: perfum3otor,
    link: "https://3otor-project.vercel.app/",
    description: "A car rental platform with advanced search and booking features."
  },
  {
    title: "Gaza Travel",
    image: gaza,
    link: "https://gaza-travel.vercel.app/",
    description: "Travel agency website showcasing destinations and tour packages."
  },
  {
    title: "DocsAura",
    image: Docsaura,
    link: "https://Docsaura.vercel.app/",
    description: "Docs Aura is a web platform designed to facilitate communication"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <hr className="section-divider" />
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className={`project-image ${project.title === "3otor" ? "project-image-3otor" : ""}`}
                loading="lazy"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="demo-button"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;