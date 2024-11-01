import './InstagramGallery.css';
import { FaInstagram } from 'react-icons/fa';

const images = [
  { id: 1, src: 'src/assets/img/instagram/insta-1.jpg', link: '@ashio_shop' },
  { id: 2, src: 'src/assets/img/instagram/insta-2.jpg', link: '@ashio_shop' },
  { id: 3, src: 'src/assets/img/instagram/insta-3.jpg', link: '@ashio_shop' },
  { id: 4, src: 'src/assets/img/instagram/insta-4.jpg', link: '@ashio_shop' },
  { id: 5, src: 'src/assets/img/instagram/insta-5.jpg', link: '@ashio_shop' },
  { id: 6, src: 'src/assets/img/instagram/insta-6.jpg', link: '@ashio_shop' },
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
