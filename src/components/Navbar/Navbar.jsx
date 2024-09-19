import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const handleHamburgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // UseEffect to close the mobile menu when the screen width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false); // Close the mobile menu on larger screens
      }
    };

    // Add event listener on resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to close the menu if the initial width is above 768px
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Net Galley</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookdetail">Explore Reviews</Link></li>
          <li><Link to="/booksubmission">Submit a Book</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
        <div className="auth-links">
          <Link to="#" className="login-btn">Login</Link>
          <Link to="#" className="signup-btn">Sign Up</Link>
        </div>
        <div className="hamburger" id="hamburger" onClick={handleHamburgerClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <ul className="mobile-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookdeatail">Explore Reviews</Link></li>
          <li><Link to="/booksubmission">Submit a Book</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/admin">Admin Dashboard</Link></li>

          <li><Link to="#" className="login-btn">Login</Link></li>
          <li><Link to="#" className="signup-btn">Sign Up</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
