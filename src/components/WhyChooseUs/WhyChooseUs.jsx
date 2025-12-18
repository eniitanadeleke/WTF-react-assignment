// WhyChooseUs.jsx
import Button from '../Button/Button'
import './WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
       
        <img 
          src="/birds.png" 
          alt="" 
          className="why-decor why-birds" 
        />
        <img 
          src="/burst.png" 
          alt="" 
          className="why-decor why-sun" 
        />
        <img 
          src="/wave.png" 
          alt="" 
          className="why-decor why-waves" 
        />

       
        <div className="why-content">
          
          <div className="why-tag">
            <i className="fas fa-tag"></i>
            <span>WHY CHOOSE US</span>
          </div>

          
          <h2 className="why-title">New Approach To Fun</h2>

         
          <p className="why-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et.
          </p>

          
          <div className="why-features">
            <div className="why-feature">
              <i className="fas fa-check"></i>
              <span>Best Teaching</span>
            </div>
            <div className="why-feature">
              <i className="fas fa-check"></i>
              <span>Quality Educators</span>
            </div>
            <div className="why-feature">
              <i className="fas fa-check"></i>
              <span>Expert Tutor</span>
            </div>
            <div className="why-feature">
              <i className="fas fa-check"></i>
              <span>Affordable</span>
            </div>
          </div>

         
          <Button variant="primary" size="medium">
            Find Events
          </Button>

          
          <img 
            src="/car.png" 
            alt="" 
            className="why-icon-car" 
          />
          <img 
            src="/why-rainbow.png" 
            alt="" 
            className="why-icon-rainbow" 
          />
        </div>

       
        <div className="why-image">
          <img 
            src="/why-girl.png" 
            alt="Happy Girl with Educational Toys"
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs