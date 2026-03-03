import { motion } from 'framer-motion'
import './Gallery.css'

const Gallery = () => {
  const images = [
    { icon: 'coffee', label: 'Espresso Art' },
    { icon: 'croissant', label: 'Fresh Pastries' },
    { icon: 'cake', label: 'Desserts' },
    { icon: 'plant', label: 'Cozy Ambiance' },
    { icon: 'book', label: 'Reading Corner' },
    { icon: 'light', label: 'Modern Space' }
  ]

  const iconMap = {
    coffee: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      </svg>
    ),
    croissant: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
      </svg>
    ),
    cake: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
        <path d="M2 21h20"/>
        <path d="M7 8v3M12 8v3M17 8v3"/>
      </svg>
    ),
    plant: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M8 6a4 4 0 0 0 4 4 4 4 0 0 0 4-4M8 14a4 4 0 0 0 4 4 4 4 0 0 0 4-4"/>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    light: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    )
  }

  return (
    <section className="gallery reveal">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Space</h2>
        <p className="gallery-subtitle">Where Coffee Meets Comfort</p>
      </motion.div>

      <div className="gallery-grid reveal-stagger">
        {images.map((item, index) => (
          <motion.div
            key={item.label}
            className="gallery-item hover-lift"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="gallery-image">
              <div className="gallery-icon">{iconMap[item.icon]}</div>
            </div>
            <p className="gallery-label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
