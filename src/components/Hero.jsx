import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-announcement">
          Announcing our next round of funding.{" "}
          <a href="/read-more">Read more →</a>
        </p>
        <h1>Data to enrich your online business</h1>
        <p className="hero-description">
          Anim aute id magna aliqua ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-secondary">Learn more →</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
