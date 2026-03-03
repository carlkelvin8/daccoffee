import { motion } from 'framer-motion'
import './Specials.css'

const Specials = () => {
  return (
    <section className="specials reveal">
      <div className="specials-container">
        <motion.div
          className="specials-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Special Offers & Promotion</h2>
          <p className="specials-description">
            Enjoy exclusive deals and rewards designed just for our valued customers. 
            From daily specials to loyalty perks, there's always something brewing.
          </p>
          
          <div className="specials-stats">
            <div className="stat-box">
              <div className="stat-number">20%</div>
              <div className="stat-label">Happy Hour Discount</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+1</div>
              <div className="stat-label">Loyalty Rewards</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">FREE</div>
              <div className="stat-label">Birthday Treat</div>
            </div>
          </div>
          
          <motion.button
            className="specials-btn btn-premium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Offers
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Specials
