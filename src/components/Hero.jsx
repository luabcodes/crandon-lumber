import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Crandon Lumber</h1>
        <p>Fine Woods for Quality Projects</p>
      </div>

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/wood.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Hero;
