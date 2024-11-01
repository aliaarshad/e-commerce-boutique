import './InfoSection.css';
import { FaShippingFast, FaMoneyCheckAlt, FaHeadset, FaLock } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-item">
        <FaShippingFast className="info-icon" />
        <div className="info-text">
          <h3>Free Shipping</h3>
          <p>For all orders over $99</p>
        </div>
      </div>
      
      <div className="info-item">
        <FaMoneyCheckAlt className="info-icon" />
        <div className="info-text">
          <h3>Money Back Guarantee</h3>
          <p>If goods have problems</p>
        </div>
      </div>
      
      <div className="info-item">
        <FaHeadset className="info-icon" />
        <div className="info-text">
          <h3>Online Support 24/7</h3>
          <p>Dedicated support</p>
        </div>
      </div>
      
      <div className="info-item">
        <FaLock className="info-icon" />
        <div className="info-text">
          <h3>Payment Secure</h3>
          <p>100% secure payment</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
