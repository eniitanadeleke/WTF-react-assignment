// VideoStats.jsx - Using Your Images
import './VideoStats.css'

function VideoStats() {
  return (
    <section className="video-stats">
     
      <div className="video-section">
        
        <img src="/white-flower.png" alt="" className="video-flower-left" />
        <img src="/white-flower.png" alt="" className="video-flower-right" />

       
        <div className="video-container">
         
          <div className="video-bunting">
            <span className="flag"></span>
            <span className="flag"></span>
            <span className="flag"></span>
            <span className="flag"></span>
            <span className="flag"></span>
          </div>

         
          <div className="video-thumbnail">
            <img src="/boy-and-girl-background.png" alt="Kindergarten Classroom" />
            
            
            <button className="video-play-btn" aria-label="Play Video">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>

     
      <div className="stats-section">
        <div className="stats-container">
         
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/teacher-logo.png" alt="Teacher" />
            </div>
            <div className="stat-number">2,500</div>
            <div className="stat-label">Total Teacher</div>
          </div>

          <div className="stat-divider"></div>

         
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/total-student.png" alt="Student" />
            </div>
            <div className="stat-number">5,000</div>
            <div className="stat-label">Total Student</div>
          </div>

          <div className="stat-divider"></div>

         
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/total-classrooom.png" alt="Classroom" />
            </div>
            <div className="stat-number">350</div>
            <div className="stat-label">Total Classroom</div>
          </div>

          <div className="stat-divider"></div>

         
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/best-award-won.png" alt="Awards" />
            </div>
            <div className="stat-number">1,200</div>
            <div className="stat-label">Best Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoStats