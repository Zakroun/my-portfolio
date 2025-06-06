import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current.reset();
    }, (error) => {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">CONTACT</h2>
      <hr className="section-divider" />
      
      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-form"
        >
          <h3>Contact me</h3>
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required
            ></textarea>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send'} <FiSend />
            </motion.button>
          </form>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-info"
        >
          <h3>Contact info</h3>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>Email</span>
            <a href="mailto:zakaryaerouane@gmail.com">zakaryaerouane@gmail.com</a>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>Phone</span>
            <a href="tel:+212618382385">+212 618 382 385</a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Location</span>
            <span>Meknes/Morocco</span>
          </div>
          
          <h4 className="social-title">My social profiles</h4>
          <div className="social-links">
            <motion.a 
              href="https://github.com/Zakroun" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="social-button"
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/zakaryae-rouane-53086229a" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="social-button"
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;