import './TrendingSection.css';
import ht1 from '../assets/img/trend/ht-1.jpg';
import ht2 from '../assets/img/trend/ht-2.jpg';
import ht3 from '../assets/img/trend/ht-3.jpg';
import bs1 from '../assets/img/trend/bs-1.jpg';
import bs2 from '../assets/img/trend/bs-2.jpg';
import bs3 from '../assets/img/trend/bs-3.jpg';
import f1 from '../assets/img/trend/f-1.jpg';
import f2 from '../assets/img/trend/f-2.jpg'; 
import f3 from '../assets/img/trend/f-3.jpg';

const products = {
  hotTrend: [
    { id: 1, name: 'Red Dress', image: ht1, rating: 4.5, price: '$120' },
    { id: 2, name: 'Summer Hat', image: ht2, rating: 4, price: '$35' },
    { id: 3, name: 'Blue Shirt', image: ht3, rating: 4.3, price: '$45' },
  ],
  bestSeller: [
    { id: 4, name: 'Leather Shoes', image: bs1, rating: 4.8, price: '$90' },
    { id: 5, name: 'Classic Watch', image: bs2, rating: 4.9, price: '$150' },
    { id: 6, name: 'Elegant Ring', image: bs3, rating: 4.7, price: '$200' },
  ],
  feature: [
    { id: 7, name: 'Designer Bag', image: f1, rating: 4.6, price: '$250' },
    { id: 8, name: 'Silk Scarf', image: f2, rating: 4.4, price: '$60' },
    { id: 9, name: 'Sunglasses', image: f3, rating: 4.3, price: '$75' },
  ],
};

const TrendingSection = () => {
  return (
    <section className="trending-section">
      {/* Column for HOT TREND */}
      <div className="trending-column">
        <h2 className="column-heading">HOT TREND</h2>
        {products.hotTrend.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="trending-product-image" />
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <div className="product-rating">{"★".repeat(Math.round(product.rating))}</div>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Column for BEST SELLER */}
      <div className="trending-column">
        <h2 className="column-heading">BEST SELLER</h2>
        {products.bestSeller.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="trending-product-image" />
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <div className="product-rating">{"★".repeat(Math.round(product.rating))}</div>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Column for FEATURE */}
      <div className="trending-column">
        <h2 className="column-heading">FEATURE</h2>
        {products.feature.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="trending-product-image" />
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <div className="product-rating">{"★".repeat(Math.round(product.rating))}</div>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
