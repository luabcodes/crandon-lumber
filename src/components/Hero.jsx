import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/wood.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>Crandon Lumber</h1>
        <p>Fine Woods for Quality Projects</p>
      </div>
    </section>
  );
}

export default Hero;
