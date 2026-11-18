import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a className="logo" href="#home" onClick={closeMenu} aria-label="KR Customizer home"><img src="/images/logo.svg" alt="KR Customizer" /></a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#home" onClick={closeMenu}>Showcase</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#products" onClick={closeMenu}>Case Studies</a>
        <a href="#blog" onClick={closeMenu}>Blog</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="mobile-login" href="#login" onClick={closeMenu}>Login</a>
        <a className="nav-demo" href="#demo" onClick={closeMenu}>Get a demo</a>
      </nav>
      <a className="desktop-login" href="#login">Login</a>
    </header>
  );
}

export default Navbar;
