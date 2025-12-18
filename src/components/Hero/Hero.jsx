// Hero.jsx
import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src="/birds.png" alt="" className="hero-decor hero-birds" />
        <img src="/sun.png" alt="" className="hero-decor hero-sun" />
        <div className="hero-decor hero-flower"></div>
        <div className="hero-decor hero-x-mark hero-x-1"></div>
        <div className="hero-decor hero-x-mark hero-x-2"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            The Best Place
            <br />
            TO Learn And Play
            <br />
            For Kids
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hero-buttons">
            <Button variant="secondary" size="medium">
              Browse Courses
            </Button>

            <div className="hero-watch-btn">
              <button className="play-button" aria-label="Play Video">
                <i className="fas fa-play"></i>
              </button>
              <span className="watch-text">Watch Now</span>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-image-container hero-boy">
            <img src="/hero-boy.png" alt="Happy Student" />
          </div>

          <div className="hero-girl-wrapper">
            <div className="hero-girl-blob"></div>

            <div className="hero-girl">
              <img src="/hero-girl.png" alt="Graduate Student" />
            </div>
          </div>

          <div className="hero-badge badge-courses">
            <div className="badge-number">5.8k</div>
            <div className="badge-label">Success Courses</div>
          </div>

          <div className="hero-badge badge-students">
            <div className="badge-info">
              <div className="badge-number">10k+</div>
              <div className="badge-label">Student</div>
            </div>
            <div className="badge-avatars">
              <img
                src="/avatars-group.png"
                alt="Students"
                className="avatar-group-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
