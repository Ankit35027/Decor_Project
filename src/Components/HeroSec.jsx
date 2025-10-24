import "./hero.css";

export default function HeroSec() {
  return (
    <section className="hero">
      <div className="hero-image">
        <div className="glow-bg"></div>
        <img
          src="https://www.bbassets.com/media/uploads/p/l/40317108_1-mansaa-decorative-led-string-2-mt-20-leds-multicolour-home-mandir-decor-moroccan-balls.jpg"
          alt="Luxury Home Lights"
          className="main-image"
        />
        <div className="floating-gallery">
          <img
            src="https://www.bbassets.com/media/uploads/p/l/40317108_1-mansaa-decorative-led-string-2-mt-20-leds-multicolour-home-mandir-decor-moroccan-balls.jpg"
            alt="Moroccan Lamp"
          />
          <img
            src="https://www.bbassets.com/media/uploads/p/l/40317108_1-mansaa-decorative-led-string-2-mt-20-leds-multicolour-home-mandir-decor-moroccan-balls.jpg"
            alt="Pendant Light"
          />
          <img
            src="https://www.bbassets.com/media/uploads/p/l/40317108_1-mansaa-decorative-led-string-2-mt-20-leds-multicolour-home-mandir-decor-moroccan-balls.jpg"
            alt="Crystal Light"
          />
        </div>
      </div>

      <div className="hero-text">
        <h1>
          Discover <span>Lights</span> That Tell Your Story
        </h1>
        <p>
          Handcrafted décor that blends emotion, art, and glow. Make your home
          shine with timeless pieces that spark conversation and warmth.
        </p>
        <button>Shop Collection</button>
      </div>
    </section>
  );
}
