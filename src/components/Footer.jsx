import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="logo" href="#home">KR<span>Customizer</span></a>
          <p>Make every product personal with simple, flexible customization.</p>
        </div>

        <div>
          <h3>Company</h3>
          <a href="#about">About Us</a>
          <a href="#products">Showcase</a>
          <a href="#blog">Case Studies</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Become a Partner</a>
        </div>

        <div>
          <h3>Product Categories</h3>
          <a href="#products">Fashion &amp; Apparel</a>
          <a href="#products">Jewelry &amp; Accessories</a>
          <a href="#products">Gifting &amp; Occasions</a>
          <a href="#products">Automotive</a>
        </div>

        <div>
          <h3>Contact Us</h3>
          <a href="tel:+18002593265">1-800-259-3265</a>
          <a href="mailto:support@example.com">support@example.com</a>
          <h3 className="social-title">Social</h3>
          <div className="social-links"><a href="#instagram">Instagram</a><a href="#facebook">Facebook</a><a href="#linkedin">LinkedIn</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#privacy">Privacy policy</a>
        <p>© 2026 KR Customizer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
