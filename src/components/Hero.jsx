import woodVideo from "../assets/videos/wood.mp4";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="video-frame">
        <video
          className="hero-video"
          src={woodVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* CONTEÚDO AGORA FICA ABAIXO DO VÍDEO */}
      <div className="hero-content-below">
        <h1>Crandon Lumber Co</h1>
        <p>Advanced Wood Solutions for Builders & Contractors</p>
       
      </div>
    </section>
  );
}

export default Hero;
