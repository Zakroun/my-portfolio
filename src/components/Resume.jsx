import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="resume-section-main">
      <h2 className="section-title">RESUME</h2>
      <hr className="section-divider" />
      
      <div className="resume-container">
        <div className="resume-column">
          <div className="resume-section">
            <h3 className="resume-heading">
              <FaGraduationCap className="resume-icon" />
              Education
            </h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>Technician specializing in digital development, full stack web option</h4>
                <span className="resume-year">2023-2025</span>
              </li>
              <li className="resume-item">
                <h4>High School Degree</h4>
                <span className="resume-year">2023</span>
              </li>
            </ul>
          </div>
          
          <div className="resume-section">
            <h3 className="resume-heading">
              <FaCertificate className="resume-icon" />
              Certificates
            </h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>Introduction to Python <span className="resume-year">2024</span></h4>
              </li>
              <li className="resume-item">
                <h4>SQL <span className="resume-year">2024</span></h4>
              </li>
              <li className="resume-item">
                <h4>Git and GitHub <span className="resume-year">2024</span></h4>
              </li>
              <li className="resume-item">
                <h4>Advanced Microsoft Excel <span className="resume-year">2024</span></h4>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="resume-column">
          <div className="resume-section">
            <h3 className="resume-heading">
              <FaBriefcase className="resume-icon" />
              Experience
            </h3>
            <ul className="resume-list">
              <li className="resume-item">
                <h4>Web Developer</h4>
                <span className="resume-year">2023-2025</span>
              </li>
            </ul>
            <p className="resume-description">
              Full-Stack Web Development Intern — 2023-2025
            </p>
            <ul className="resume-details">
              <li>
                Contributed to the development of dynamic web applications, leveraging modern front-end and back-end
                technologies to deliver scalable solutions.
              </li>
              <li>
                Gained hands-on experience in designing, implementing, and maintaining web functionalities
                in real-world scenarios.
              </li>
              <li>
                Collaborated with cross-functional teams to troubleshoot and resolve technical issues.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;