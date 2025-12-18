// Features.jsx
import './Features.css'

function Features() {
  return (
    <section className="features">
      <div className="features-container">
        {/* Card 1 - Start Course (Gray background, teal icon) */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/card-1-logo.png" alt="Start Course" />
          </div>
          <h3 className="feature-title">START COURSE</h3>
          <p className="feature-description">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>

        {/* Card 2 - Expert Teachers (TEAL background, white icon) */}
        <div className="feature-card feature-card-teal">
          <div className="feature-icon feature-icon-white">
            <img src="/card-2-logo.png" alt="Expert Teachers" />
          </div>
          <h3 className="feature-title">EXPERT TEACHERS</h3>
          <p className="feature-description">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>

        {/* Card 3 - Strategic Location (Gray background, teal icon) */}
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/card-3-logo.png" alt="Strategic Location" />
          </div>
          <h3 className="feature-title">STRATEGI LOCATION</h3>
          <p className="feature-description">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features