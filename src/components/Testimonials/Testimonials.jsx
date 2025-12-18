// Testimonials.jsx
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing",
      name: "Kathy Sullivan",
      role: "CEO at ordain it",
      image: "/khaty.png"
    },
    {
      id: 2,
      stars: 5,
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing",
      name: "Elsie Stroud",
      role: "CEO at Edwards",
      image: "/elsie.png"
    },
    {
      id: 3,
      stars: 5,
      text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing",
      name: "Kathy Sullivan",
      role: "CEO at ordain it",
      image: "/khaty.png"
    }
  ]

  return (
    <section className="testimonials">
      
      <img 
        src="https://via.placeholder.com/80x80/FFC107/FFFFFF?text=Flower" 
        alt="" 
        className="testimonial-decor testimonial-flower" 
      />
      <img 
        src="https://via.placeholder.com/100x100/FF9800/FFFFFF?text=Sun" 
        alt="" 
        className="testimonial-decor testimonial-sun" 
      />

      <div className="testimonials-container">
       
        <div className="testimonials-header">
          <div className="testimonials-tag">
            <i className="fas fa-tag"></i>
            <span>TESTIMONIAL</span>
          </div>
          <h2 className="testimonials-title">What Parents Say</h2>
        </div>

       
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {[...Array(testimonial.stars)].map((_, index) => (
                  <i key={index} className="fas fa-star"></i>
                ))}
              </div>

              
              <p className="testimonial-text">"{testimonial.text}"</p>

             
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image" 
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials