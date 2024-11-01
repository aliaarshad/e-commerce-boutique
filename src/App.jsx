import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import FeaturedSection from "./components/FeaturedSection";
import TrendingSection from "./components/TrendingSection";
import DiscountSection from "./components/DiscountSection";
import InfoSection from "./components/InfoSection";
import InstagramGallery from "./components/InstagramGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <FeaturedSection />
      <TrendingSection />
      <DiscountSection />
      <InfoSection/>
      <InstagramGallery />
      <Footer />
    </>
  );
}

export default App;