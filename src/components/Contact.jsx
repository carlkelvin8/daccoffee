import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact reveal">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          
          <p className="contact-description">
            Have questions or want to learn more? We'd love to hear from you. 
            Visit us or reach out through any of the channels below.
          </p>

          <motion.div
            className="contact-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="contact-card hover-lift">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p>Linawan Road, Muzon<br/>San Jose del Monte, 3023 Bulacan</p>
            </div>

            <div className="contact-card hover-lift">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Hours</h3>
              <p>Sun-Thu: 3pm - 12mn<br/>Saturday: 6pm - 12mn<br/>Friday: Closed</p>
            </div>

            <div className="contact-card hover-lift">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Contact</h3>
              <p>0945 309 7926<br/>hello@daccoffee.com</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
