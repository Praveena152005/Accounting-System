import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './homepage.css'; 

function HomePage() {
  // const navigate = useNavigate();
    
//   const handleLogout = () => {
//     navigate("/home");
// };
const scrollToSection = () => {
  const targetSection = document.getElementById('finance-section');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollTo = () => {
  const targetSection = document.getElementById('news');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior:'smooth'});
  }
};

  return (
    <div>
      <header className="header">
        <div className="navbar">
          <div className="logo">Money Map</div>
          <nav className="navLinks">
            <ul className="navLinks">
              <li><a href="#home" className="link">Home</a></li>
              <li><a href="#aboutus" className="link">About Us</a></li>
              <li><a href="#services" className="link">Services</a></li>
              <li><a href="#news" className="link">News</a></li>
              <li><a href="#pages" className="link">Pages</a></li>
              <li><a href="#logout" className="link" >Logout</a></li>
            </ul>
          </nav>
        </div>
        <div className="hero">
          <h1 className="heroTitle">We help businesses grow and innovate</h1>
          
          <button className="heroButton" onClick={scrollToSection}>Get Started</button>
        </div>
      </header>

      <section id="finance-section" className="finance-section">
  <h2 className="section-title">We are Finance Consultant</h2>
  <p className="section-subtitle">
  We provide expert advice on managing finances, investments, and budgeting strategies. We help individuals and businesses optimize financial performance and achieve their financial goals.
  </p>
  <div className="services-container">
    <div className="service-card">
      <img src="https://img.freepik.com/free-photo/business-partners-discussing-project-laptop_9975-22859.jpg" alt="Business Consulting" className="service-image" />
      <h3 className="service-title">Business Consulting</h3>
      <p className="service-description">Expert advice to help businesses grow and improve performance.</p>
    </div>
    <div className="service-card">
      <img src="https://i.pinimg.com/736x/f6/ea/7e/f6ea7e23a965e67d0be6b2cabb2b0bcd.jpg" alt="Strategy & Innovation" className="service-image" />
      <h3 className="service-title">Strategy & Innovation</h3>
      <p className="service-description">Creative strategies to stay ahead in a competitive market.</p>
    </div>
    <div className="service-card">
      <img src="https://i.pinimg.com/564x/4e/e8/de/4ee8de1944a5f1f7daf247a292319f76.jpg" alt="Investment Strategies" className="service-image" />
      <h3 className="service-title">Investment Strategies</h3>
      <p className="service-description">Tailored investment plans to maximize your financial returns.</p>
    </div>
  </div>
</section>
<section className="statistics-section">
      <div className="stat-item">
        <h2 className="stat-number">2015</h2>
        <p className="stat-description">Finished Projects</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number">3201+</h2>
        <p className="stat-description">Happy Customers</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number">831</h2>
        <p className="stat-description">Working Hours</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number">4327</h2>
        <p className="stat-description">Lines of Code</p>
      </div>
    </section>

    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">🌐</div>
          <h3 className="service-title">Business Services</h3>
          <p className="service-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3 className="service-title">Web Design</h3>
          <p className="service-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">🗂️</div>
          <h3 className="service-title">Travel & Solutions</h3>
          <p className="service-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3 className="service-title">Design Services</h3>
          <p className="service-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">📈</div>
          <h3 className="service-title">Marketing Online</h3>
          <p className="service-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">💼</div>
          <h3 className="service-title">Web Design</h3>
          <p className="service-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </section>

    <section className="hero-section">
      <div className="hero-content">
        <h2>Top 20 Company</h2>
        <h3>Start up of the Year</h3>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown...
        </p>
        <button className="watch-video-btn">Watch video</button>
      </div>
    </section>

    <section className="practice-areas-section">
      <div className="practice-areas-header">
        <h2>Our Practice Areas</h2>
        <div className="practice-areas-links">
          <span>All</span>
          <span className="active">Business Plan</span>
          <span>Finance</span>
          <span>Consulting</span>
          <span>Business</span>
          <span>Design</span>
        </div>
      </div>
      <div className="practice-areas-grid">
        <div className="practice-area active">
          <div className="image-wrapper">
            <img src="https://i.pinimg.com/736x/02/c7/77/02c77725884de83a1699cc04793da780.jpg" alt="The best shop" />
          </div>
          <div className="title">Elite Occasions</div>
          <div className="arrow">&#x2192;</div>
        </div>

        <div className="practice-area">
          <div className="image-wrapper">
            <img src="https://i.pinimg.com/564x/ff/c9/d4/ffc9d4a109b6fb5c969afe96f327a5fc.jpg" alt="Branding store" />
          </div>
          <div className="title">Branding store</div>
        </div>

        <div className="practice-area">
          <div className="image-wrapper">
            <img src="https://i.pinimg.com/originals/3b/d5/bc/3bd5bc3116e0452f049dc73260ebae74.jpg" alt="Coffee house" />
          </div>
          <div className="title">Coffee house</div>
        </div>

        <div className="practice-area">
          <div className="image-wrapper">
            <img src="https://i.pinimg.com/564x/cb/6b/0d/cb6b0d723cf1e815f29471d093762377.jpg" alt="Design" />
          </div>
          <div className="title">Designer</div>
        </div>
      </div>
    </section>

    <section id="news" className="latest-news">
            <h2 className="section-title">Latest news</h2>
            <div className="news-container">
                <div className="news-card">
                    <img src="https://i.pinimg.com/564x/53/5c/e3/535ce3adabe60a7053b75d12ff8897dc.jpg" alt="News 1" className="news-image" />
                    <div className="news-content">
                        <span className="news-date">SEPT 1, 2024</span>
                        <h3 className="news-title">Hire a Branding Consultant</h3>
                        <p className="news-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div  className="news-card">
                    <img src="https://i.pinimg.com/564x/29/ea/76/29ea762fceceac940e1c9c45ae51ebb6.jpg" alt="News 2" className="news-image" />
                    <div className="news-content">
                        <span className="news-date">AUG 28, 2024</span>
                        <h3 className="news-title">Integration of technology</h3>
                        <p className="news-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="news-card">
                    <img src="https://i.pinimg.com/564x/6f/e1/95/6fe19512b4197574bc0a8217d5803fa3.jpg" alt="News 3" className="news-image" />
                    <div className="news-content">
                        <span className="news-date">AUG 25, 2024</span>
                        <h3 className="news-title">Change in accounting</h3>
                        <p className="news-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
            <button className="news-button" onClick={scrollTo}>Go to News</button>
        </section>

        <footer className="footer">
      <div className="container">
        <div className="footer-section about-us" style={{paddingRight:'35px'}}>
          <h2>About us</h2>
          <p>
            The industry’s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
           
        </div>

        <div className="footer-section quicklinks" style={{paddingLeft:'2.1px'}}>
          <h2>Quicklinks</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contactus">Contact us</a></li>
            <li><a href="#testimonals">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-section latest-twitter">
          <h2>Latest Twitter</h2>
          <p>
            <i className="fab fa-twitter"></i> @ThemeFlat Lorem Ipsum has been the industry’s
            standard dummy text ever since the 1500s.
          </p>
          <p>
            <i className="fab fa-twitter"></i> @SimonaID Lorem Ipsum is simply dummy text of the
            printing and typesetting Lorem Ipsum is simply dummy.
          </p>
        </div>

        <div className="footer-section subscribe" style={{paddingLeft:'40px'}}>
          <h2>Subscribe</h2>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit" >SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright ThemeFlat 2018. All Rights Reserved</p>
      </div>
    </footer>
    </div>
  );
}

export default HomePage;
