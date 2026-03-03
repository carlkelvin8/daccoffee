import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [showAllEspresso, setShowAllEspresso] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const espressoItems = [
    { name: 'Caffè Americano', hot: '80', tall: '90', grande: '110', venti: '140', image: '/image.png', featured: true },
    { name: 'Honey Americano', hot: '90', tall: '100', grande: '120', venti: '150', image: '/image copy.png', featured: true },
    { name: 'Spanish Latte', hot: '90', tall: '100', grande: '120', venti: '180', image: '/image.png', featured: true },
    { name: 'Caramel Macchiato', hot: '100', tall: '110', grande: '130', venti: '190', image: '/image copy.png', featured: true },
    { name: 'White Chocolate Mocha', hot: '100', tall: '110', grande: '130', venti: '190', image: '/image.png' },
    { name: 'French Vanilla Latte', hot: '100', tall: '110', grande: '130', venti: '190', image: '/image copy.png' },
    { name: 'Roasted Almond Latte', hot: '100', tall: '110', grande: '130', venti: '190', image: '/image.png' },
    { name: 'Dark Mocha Latte', hot: '100', tall: '110', grande: '130', venti: '190', image: '/image copy.png' },
    { name: 'French Cinnamon Toast', hot: '100', tall: '110', grande: '130', venti: '190', image: '/image.png' },
    { name: 'Sea Salt Oat Latte', hot: '', tall: '130', grande: '150', venti: '210', image: '/image copy.png' },
    { name: 'Salted Caramel', hot: '', tall: '110', grande: '130', venti: '190', image: '/image.png' },
    { name: 'Nutella Latte', hot: '', tall: '130', grande: '150', venti: '210', image: '/image copy.png' },
    { name: 'Biscoff Latte', hot: '', tall: '130', grande: '150', venti: '220', image: '/image.png' },
    { name: 'Dulce de Leche', hot: '', tall: '110', grande: '130', venti: '190', image: '/image copy.png' },
    { name: 'Oreo Latte', hot: '', tall: '120', grande: '140', venti: '190', image: '/image.png' },
    { name: 'Dirty Matcha', hot: '', tall: '120', grande: '140', venti: '190', image: '/image copy.png' }
  ]

  const yakultItems = [
    { name: 'Lychee Yakult', price: '100', image: '/image.png' },
    { name: 'Strawberry Yakult', price: '100', image: '/image copy.png' },
    { name: 'Blueberry Yakult', price: '100', image: '/image.png' }
  ]

  const displayedEspresso = showAllEspresso ? espressoItems : espressoItems.slice(0, 8)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const handleSizeClick = (product, size, price) => {
    const message = `Selected: ${product.name} - ${size} (₱${price})`
    alert(message)
  }

  return (
    <section className="menu reveal">
      <div className="menu-container">
        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="modal-image">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                
                <div className="modal-details">
                  <h3 className="modal-title">{selectedProduct.name}</h3>
                  <p className="modal-description">
                    Handcrafted with premium espresso beans and expertly steamed milk. 
                    Available in multiple sizes to suit your preference.
                  </p>
                  
                  <div className="modal-sizes">
                    <h4>Available Sizes</h4>
                    <div className="modal-size-grid">
                      {selectedProduct.hot && (
                        <div className="modal-size-option">
                          <span className="modal-size-label">Hot</span>
                          <span className="modal-size-price">₱{selectedProduct.hot}</span>
                        </div>
                      )}
                      {selectedProduct.tall && (
                        <div className="modal-size-option">
                          <span className="modal-size-label">Tall</span>
                          <span className="modal-size-price">₱{selectedProduct.tall}</span>
                        </div>
                      )}
                      {selectedProduct.grande && (
                        <div className="modal-size-option">
                          <span className="modal-size-label">Grande</span>
                          <span className="modal-size-price">₱{selectedProduct.grande}</span>
                        </div>
                      )}
                      {selectedProduct.venti && (
                        <div className="modal-size-option">
                          <span className="modal-size-label">Venti</span>
                          <span className="modal-size-price">₱{selectedProduct.venti}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button className="modal-order-btn" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Espresso Section */}
        <div className="menu-section">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title">Espresso Collection</h3>
            <p className="section-subtitle">Handcrafted with premium beans</p>
          </motion.div>
          
          <div className="product-grid">
            {displayedEspresso.map((item, index) => (
              <motion.div 
                key={item.name}
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                layout
                onClick={(e) => {
                  // Only trigger if clicking the card itself, not size options
                  if (e.target === e.currentTarget || e.target.closest('.product-image')) {
                    handleProductClick(item)
                  }
                }}
              >
                <div className="product-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="product-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{item.name}</h4>
                  <div className="product-sizes">
                    {item.hot && (
                      <div 
                        className="size-option"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSizeClick(item, 'Hot', item.hot)
                        }}
                      >
                        <span className="size-label">Hot</span>
                        <span className="size-price">₱{item.hot}</span>
                      </div>
                    )}
                    {item.tall && (
                      <div 
                        className="size-option"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSizeClick(item, 'Tall', item.tall)
                        }}
                      >
                        <span className="size-label">Tall</span>
                        <span className="size-price">₱{item.tall}</span>
                      </div>
                    )}
                    {item.grande && (
                      <div 
                        className="size-option"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSizeClick(item, 'Grande', item.grande)
                        }}
                      >
                        <span className="size-label">Grande</span>
                        <span className="size-price">₱{item.grande}</span>
                      </div>
                    )}
                    {item.venti && (
                      <div 
                        className="size-option"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSizeClick(item, 'Venti', item.venti)
                        }}
                      >
                        <span className="size-label">Venti</span>
                        <span className="size-price">₱{item.venti}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {espressoItems.length > 8 && (
            <motion.div 
              className="see-more-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button 
                className="see-more-btn"
                onClick={() => setShowAllEspresso(!showAllEspresso)}
              >
                <span>{showAllEspresso ? 'Show Less' : `See More (${espressoItems.length - 8} more)`}</span>
                <svg 
                  className={`arrow ${showAllEspresso ? 'rotated' : ''}`}
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu
