import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap
} from 'react-icons/fa';
import { SiPhp, SiMysql, SiPython } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' }
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <hr className="section-divider" />
      
      <div ref={ref} className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="skill-card"
            style={{ '--skill-color': skill.color }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;