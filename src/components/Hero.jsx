
import '../styles/Hero.css';
import Slider from './Slider';
import club1 from "../assets/club1.png";
import club2 from "../assets/club2.png";
import club3 from "../assets/club3.png";
import club4 from "../assets/club4.png";
import club5 from "../assets/club5.png";

const Hero = () => {
   // Lista de imágenes
   const images = [club1, club2, club3, club4, club5];
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Se parte de los Clubs de Videojuegos</h1>
        <p className="hero-description">
          En este espacio podrás disfrutar de los mejores videojuegos y ser parte de un club, donde podrás compartir con tus amigos y ganar premios
        </p>
        <div className="hero-slider">
          <Slider images={images} /> {/* Utiliza el componente Slider aquí */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
