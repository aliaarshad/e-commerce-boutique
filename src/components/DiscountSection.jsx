import { useState, useEffect } from 'react';
import './DiscountSection.css';
import discount from '../assets/img/discount.jpg';

const DiscountSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 3,
    minutes: 10,
    seconds: 58,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        const seconds = prevTime.seconds > 0 ? prevTime.seconds - 1 : 59;
        const minutes = prevTime.seconds === 0 ? (prevTime.minutes > 0 ? prevTime.minutes - 1 : 59) : prevTime.minutes;
        const hours = prevTime.minutes === 0 && prevTime.seconds === 0 ? (prevTime.hours > 0 ? prevTime.hours - 1 : 23) : prevTime.hours;
        const days = prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0 ? prevTime.days - 1 : prevTime.days;
        
        return {
          days: days > 0 ? days : 0,
          hours: hours >= 0 ? hours : 0,
          minutes: minutes >= 0 ? minutes : 0,
          seconds: seconds >= 0 ? seconds : 0,
        };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className="discount-section">
      {/* Left Column with Image */}
      <div className="discount-image">
        <img src={discount} alt="Discount Offer" />
      </div>

      {/* Right Column with Discount Details */}
      <div className="discount-details">
        <div className="discount-circle">
          <p>DISCOUNT</p>
          <h2>Summer 2024</h2>
          <span>SALE <span className="red-text">50%</span></span>
        </div>

        <div className="countdown-timer">
          <p>{timeLeft.days}Day, {timeLeft.hours}Hour, {timeLeft.minutes}Min, {timeLeft.seconds}Sec</p>
        </div>

        <a href="/shop" className="shop-now">Shop Now</a>
      </div>
    </section>
  );
};

export default DiscountSection;
