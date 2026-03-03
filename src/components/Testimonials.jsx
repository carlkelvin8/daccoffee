import { motion } from 'framer-motion'
import './Testimonials.css'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Coffee Enthusiast',
      text: 'Best coffee in town! The atmosphere is perfect for working or catching up with friends. Highly recommend the Spanish Latte.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Regular Customer',
      text: 'I come here every morning. The baristas know their craft and the service is always friendly and welcoming.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Food Blogger',
      text: 'Not just great coffee, but amazing pastries too! The Dirty Matcha is my go-to. A must-visit spot!',
      rating: 5
    }
  ]

  return (
    <section className="testimonials reveal">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Customers Say</h2>
          <p className="testimonials-description">
            Real stories from real people who love their daily coffee ritual with us.
          </p>
        </motion.div>

        <div className="testimonials-grid reveal-stagger">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="testimonial-card hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{review.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
