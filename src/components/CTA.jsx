import { motion } from 'framer-motion'
import './CTA.css'

const CTA = () => {
  const handleOrderNow = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offset = 70
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleViewMenu = () => {
    // Scroll to menu section
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      const offset = 70
      const elementPosition = menuSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="cta-section reveal">
      <div className="cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready For Your Perfect Cup?</h2>
          <p>Visit us today and experience the daccoffee difference. Every cup tells a story.</p>
          
          <div className="cta-buttons">
            <motion.button
              className="btn-premium cta-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderNow}
            >
              Order Now
            </motion.button>
            <motion.button
              className="cta-btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewMenu}
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
