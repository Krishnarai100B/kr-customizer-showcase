import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">ONE PLATFORM. ENDLESS POSSIBILITIES.</p>
        <h1>Explore Your Style From Fashion to Functional Gear</h1>
        <p className="hero-description">
          Browse the best in Apparel, Accessories, Automotive Essentials,
          Jewelry &amp; Outdoor Gear — All in One Place.
        </p>
        <a className="primary-button" href="#demo">Request a Demo</a>
      </div>

      <div className="hero-visual" aria-label="Hat, t-shirt, necklace and car product showcase">
        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>
        <div className="hero-color-picker" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <img className="hero-product hero-hat" src="/images/hat.png" alt="Floral custom hat" />
        <img className="hero-product hero-shirt" src="/images/tshirt-3d.png" alt="Blue custom t-shirt" />
        <img className="hero-product hero-necklace" src="/images/necklace-3d.png" alt="Gold custom necklace" />
        <img className="hero-product hero-car" src="/images/car-3d.png" alt="Black custom pickup truck" />
      </div>
    </section>
  );
}

export default Hero;
