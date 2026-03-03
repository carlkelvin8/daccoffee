import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section className="about reveal">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <p>
              Welcome to daccoffee, where every cup is crafted with passion 
              and every visit feels like home. We're not just serving coffee – we're 
              creating moments that matter.
            </p>
            <p>
              From our signature espresso drinks to freshly baked treats, everything 
              is made with care. Whether you're catching up with friends or finding 
              your quiet corner, we've got the perfect spot and the perfect brew.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img src="/shop.png" alt="daccoffee shop" className="shop-image" />
          </motion.div>
          
          <div className="about-values">
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                  <path d="M12 6v12M6 12h12"/>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>Premium beans sourced from sustainable farms</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>A welcoming space for everyone</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>Expert baristas crafting every cup</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
