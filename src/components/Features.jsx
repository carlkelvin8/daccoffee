import { motion } from 'framer-motion'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: 'leaf',
      title: 'Organic Beans',
      description: 'Sourced from sustainable farms around the world'
    },
    {
      icon: 'award',
      title: 'Expert Baristas',
      description: 'Trained professionals crafting your perfect cup'
    },
    {
      icon: 'wifi',
      title: 'Free WiFi',
      description: 'High-speed internet for work or leisure'
    },
    {
      icon: 'music',
      title: 'Live Music',
      description: 'Enjoy acoustic sessions every weekend'
    },
    {
      icon: 'cake',
      title: 'Fresh Pastries',
      description: 'Baked daily in-house with love'
    },
    {
      icon: 'car',
      title: 'Easy Parking',
      description: 'Convenient parking available for customers'
    }
  ]

  const iconMap = {
    leaf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
        <path d="M12 6v12M6 12h12"/>
      </svg>
    ),
    award: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6"/>
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/>
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1"/>
      </svg>
    ),
    music: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    cake: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
        <path d="M2 21h20"/>
        <path d="M7 8v3M12 8v3M17 8v3"/>
      </svg>
    ),
    car: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 17h14v-4H5v4z"/>
        <path d="M5 13L7 7h10l2 6"/>
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
      </svg>
    )
  }

  return (
    <section className="features reveal">
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Why Choose Us</h2>
        <p className="features-subtitle">More Than Just Coffee</p>
      </motion.div>

      <div className="features-grid reveal-stagger">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="feature-item hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="feature-icon-wrapper">
              <div className="feature-icon-large">{iconMap[feature.icon]}</div>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
