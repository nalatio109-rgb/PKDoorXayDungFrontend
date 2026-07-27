import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Giới Thiệu', path: '/about' },
    { name: 'Dịch Vụ', path: '/services' },
    { name: 'Dự Án', path: '/projects' },
    { name: 'Tin Tức', path: '/news' },
    { name: 'Báo Giá', path: '/quote' },
    { name: 'Liên Hệ', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const forceWhiteText = isHome && !scrolled;

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''} ${forceWhiteText ? 'header-white-text' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          Xây Dựng Nhà <span className="logo-accent">Đà Nẵng</span>
        </Link>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">

          <a href="tel:0905943679" className="btn btn-primary contact-btn">
            <Phone size={18} />
            <span>0905 943 679</span>
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
