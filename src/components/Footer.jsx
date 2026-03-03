import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-bg-pattern"></div>
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="footer-section footer-brand" variants={itemVariants}>
            <div className="brand-wrapper">
              <h3>daccoffee.</h3>
              <div className="brand-accent"></div>
            </div>
            <p>Where every sip feels like home. Crafting moments that matter, one cup at a time.</p>
            
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15</span>
                <span className="stat-label">Coffee Variants</span>
              </div>
            </div>

            <div className="footer-social">
              <a 
                href="https://www.facebook.com/profile.php?id=61586552905312" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home"><span className="link-arrow">→</span> Home</a></li>
              <li><a href="#menu"><span className="link-arrow">→</span> Menu</a></li>
              <li><a href="#about"><span className="link-arrow">→</span> About</a></li>
              <li><a href="#reviews"><span className="link-arrow">→</span> Reviews</a></li>
              <li><a href="#contact"><span className="link-arrow">→</span> Contact</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span>Linawan Road, Muzon<br/>San Jose del Monte<br/>3023 Bulacan</span>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:09453097926" className="contact-link">0945 309 7926</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Hours</span>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Sun - Thu</span>
                      <span className="time">3pm - 12mn</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Saturday</span>
                      <span className="time">6pm - 12mn</span>
                    </div>
                    <div className="hours-item closed">
                      <span className="day">Friday</span>
                      <span className="time">Closed</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div className="footer-section footer-map" variants={itemVariants}>
            <h4>Find Us</h4>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.867849616469!2d121.02550861118964!3d14.83267308562193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af001306216d%3A0x224c10ccbde5712d!2sdaccoffee!5e0!3m2!1sen!2sus!4v1772538131343!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="daccoffee location"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} daccoffee. All rights reserved.</p>
            <div className="footer-love">
              <span>Made with</span>
              <motion.span 
                className="heart"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ❤️
              </motion.span>
              <span>in Bulacan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
