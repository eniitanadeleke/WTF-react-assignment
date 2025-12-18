// TopBar.jsx
import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        {/* Left - Working Hours */}
        <div className="topbar-item">
          <i className="far fa-clock topbar-icon"></i>
          <span>Working : Monday - Friday, 9am - 5:pm</span>
        </div>

        {/* Center - Location */}
        <div className="topbar-item">
          <i className="fas fa-map-marker-alt topbar-icon"></i>
          <span>Hudson, Wisconsin(WI), 54016</span>
        </div>

        {/* Right - Language & Social */}
        <div className="topbar-right">
          {/* Language Selector */}
          <div className="topbar-language">
            <img 
              src="/us-logo.png" 
              alt="US Flag" 
              className="language-flag"
            />
            <span>English</span>
            <span className="dropdown-arrow">▾</span>
          </div>

          {/* Social Media Icons */}
          <div className="topbar-social">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="skype">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar