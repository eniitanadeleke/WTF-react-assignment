// About.jsx
import Button from '../Button/Button'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-images">
          
          <div className="about-decor about-cloud"></div>
          <div className="about-decor about-dot about-dot-orange-1"></div>
          <div className="about-decor about-dot about-dot-orange-2"></div>
          <div className="about-decor about-dot about-dot-teal-1"></div>
          <div className="about-decor about-dot about-dot-teal-2"></div>
          
       
          <div className="about-image-boy">
            <img src="/about-boy.png" alt="Happy Student" />
          </div>

          
          <div className="about-image-girl">
            <img src="/about-girl.png" alt="Student with Glasses" />
          </div>

          
          <div className="about-badge">
            <span className="badge-text">Happy Student</span>
            <img src="/avatars-group.png" alt="Students" className="badge-avatars" />
          </div>
        </div>

        
        <div className="about-content">
          
          <div className="about-tag">
            <i className="fas fa-tag"></i>
            <span>ABOUT US</span>
          </div>

          
          <h2 className="about-title">
            It's Our Passion To Work With Children At{' '}
            <span className="highlight">Kindergarten.</span>
          </h2>

          
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud..
          </p>

       
          <div className="about-features">
            <div className="about-feature">
              <i className="fas fa-check-circle"></i>
              <span>QUALITY EDUCATIONS</span>
            </div>
            <div className="about-feature">
              <i className="fas fa-check-circle"></i>
              <span>PLAY TO LEARN</span>
            </div>
            <div className="about-feature">
              <i className="fas fa-check-circle"></i>
              <span>SAFETY AND SECURITY</span>
            </div>
            <div className="about-feature">
              <i className="fas fa-check-circle"></i>
              <span>HOMELIKE ENVIROMEND</span>
            </div>
          </div>

         
          <Button variant="secondary" size="medium">
            Admission Open
          </Button>
        </div>

        
        <img src="/birds-branch.png" alt="" className="about-birds" />
      </div>
    </section>
  )
}

export default About