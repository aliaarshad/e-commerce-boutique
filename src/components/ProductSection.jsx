import { useState, useEffect } from 'react';
import './ProductSection.css';
import product1 from '../assets/img/product/product-1.jpg';
import product2 from '../assets/img/product/product-2.jpg';
import product3 from '../assets/img/product/product-3.jpg';
import product4 from '../assets/img/product/product-4.jpg';
import product5 from '../assets/img/product/product-5.jpg';
import product6 from '../assets/img/product/product-6.jpg';
import product7 from '../assets/img/product/product-7.jpg';
import product8 from '../assets/img/product/product-8.jpg';

const products = [
  { id: 1, category: "Women's", name: 'Cotton T-shirt', price: 40, image: product1, label: 'New', rating: 4.5 },
  { id: 2, category: "Men's", name: 'Denim Jacket', price: 60, image: product2, label: 'Sale', oldPrice: 70, rating: 4 },
  { id: 3, category: "Kid's", name: 'Kid’s Hoodie', price: 25, image: product3, label: 'Out of stock', rating: 3.5 },
  { id: 4, category: 'Accessories', name: 'Leather Belt', price: 15, image: product4, label: 'New', rating: 5 },
  { id: 5, category: "Women's", name: 'Silk Scarf', price: 30, image: product5, label: 'Sale', oldPrice: 40, rating: 4 },
  { id: 6, category: 'Cosmetics', name: 'Lipstick', price: 10, image: product6, label: 'New', rating: 4 },
  { id: 7, category: "Men's", name: 'Sports Cap', price: 20, image: product7, label: 'Out of stock', rating: 4.5 },
  { id: 8, category: "Kid's", name: 'Toy Set', price: 18, image: product8, label: 'New', rating: 5 },
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleImageClick = (image) => {
    setPopupImage(image);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setPopupVisible(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="product-section">
      {/* Navigation bar */}
      <div className="product-nav">
        <div className="nav-left">
          <h2>New <span className="highlight">Products</span></h2>
        </div>
        <div className="nav-right">
          {['All', "Women's", "Men's", "Kid's", 'Accessories', 'Cosmetics'].map(category => (
            <button 
              key={category} 
              onClick={() => handleCategoryClick(category)} 
              className={activeCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card zoom-transition">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
              <span className="product-label">{product.label}</span>
              <div className="hover-icons">
                <button className="icon" onClick={() => handleImageClick(product.image)}>🔍</button>
                <button className="icon">❤️</button>
                <button className="icon">🛒</button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="rating">{'⭐'.repeat(Math.round(product.rating))}</div>
              <div className="price">
                ${product.price} {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for Zoomed Image */}
      {isPopupVisible && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClosePopup}>✖️</button>
            <img src={popupImage} alt="Product Zoom" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
