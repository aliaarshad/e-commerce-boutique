import './InstagramGallery.css';
import { FaInstagram } from 'react-icons/fa';
import insta1 from '../assets/img/instagram/insta-1.jpg';
import insta2 from '../assets/img/instagram/insta-2.jpg';
import insta3 from '../assets/img/instagram/insta-3.jpg';
import insta4 from '../assets/img/instagram/insta-4.jpg';
import insta5 from '../assets/img/instagram/insta-5.jpg';
import insta6 from '../assets/img/instagram/insta-6.jpg';


const images = [
  { id: 1, src: insta1, link: '@ashio_shop' },
  { id: 2, src: insta2, link: '@ashio_shop' },
  { id: 3, src: insta3, link: '@ashio_shop' },
  { id: 4, src: insta4, link: '@ashio_shop' },
  { id: 5, src: insta5, link: '@ashio_shop' },
  { id: 6, src: insta6, link: '@ashio_shop' },
];

const InstagramGallery = () => {
  return (
    <section className="instagram-gallery">
      {images.map((image) => (
        <div className="instagram-column" key={image.id}>
          <img src={image.src} alt={`Instagram ${image.id}`} className="instagram-image" />
          <div className="overlay">
            <FaInstagram className="instagram-icon" />
            <a href={`https://www.instagram.com/${image.link}`}>{image.link}</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InstagramGallery;
