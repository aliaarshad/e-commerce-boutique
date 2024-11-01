import './HeroSection.css'; // External CSS for styling

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Column 1 (Left side, larger box) */}
      <div className="hero-content large-box">
        <div className="text-content">
          <h1>Exclusive Boutique Collection</h1>
          <p>Explore our unique collection of unstitched fabrics and custom designs tailored just for you.</p>
          <a href="/shop" className="shop-now-button">Shop Now</a>
        </div>
      </div>

      {/* Column 2 and 3 (Right side, smaller boxes) */}
      <div className="hero-images">
        <div className="hero-content small-box">
          <div className="text-content">
            <h2>Mens fashion</h2>
            <p>358 items</p>
            <a href="/shop" className="shop-now-button">Shop Now</a>
          </div>
        </div>

        <div className="hero-content small-box">
          <div className="text-content">
            <h2>Kids fashion</h2>
            <p>273 items</p>
            <a href="/shop" className="shop-now-button">Shop Now</a>
          </div>
        </div>

        <div className="hero-content small-box">
          <div className="text-content">
            <h2>Cosmetics</h2>
            <p>159 items</p>
            <a href="/shop" className="shop-now-button">Shop Now</a>
          </div>
        </div>

        <div className="hero-content small-box">
          <div className="text-content">
            <h2>Accessories</h2>
            <p>792 items</p>
            <a href="/shop" className="shop-now-button">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
