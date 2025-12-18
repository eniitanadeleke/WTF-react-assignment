import { useState } from 'react'
import Button from '../Button/Button'
import './Navbar.css'

function Navbar() {
  const [activeMenu, setActiveMenu] = useState('home')

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <img 
            src="/edunity-logo.png" 
            alt="Edunity Logo" 
            className="logo-image"
          />
        </div>

        <ul className="navbar-menu">
          <li>
            <a 
              href="#home" 
              className={activeMenu === 'home' ? 'active' : ''}
              onClick={() => setActiveMenu('home')}
            >
              Home
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeMenu === 'about' ? 'active' : ''}
              onClick={() => setActiveMenu('about')}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#courses" 
              className={activeMenu === 'courses' ? 'active' : ''}
              onClick={() => setActiveMenu('courses')}
            >
              Courses
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </a>
          </li>
          <li>
            <a 
              href="#pages" 
              className={activeMenu === 'pages' ? 'active' : ''}
              onClick={() => setActiveMenu('pages')}
            >
              Pages
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              className={activeMenu === 'blog' ? 'active' : ''}
              onClick={() => setActiveMenu('blog')}
            >
              Blog
              <i className="fas fa-chevron-down dropdown-icon"></i>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeMenu === 'contact' ? 'active' : ''}
              onClick={() => setActiveMenu('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        
        <div className="navbar-actions">
          <button className="icon-button" aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
          <button className="icon-button" aria-label="User Account">
            <i className="far fa-user"></i>
          </button>
          <Button variant="secondary" size="medium">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar