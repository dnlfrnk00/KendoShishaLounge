import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-social">
                <a
                    href="https://www.instagram.com/kendolounge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="Instagram"
                >
                    <Instagram size={20} />
                </a>
                <a
                    href="https://goo.gl/maps/euN5YTYUv6HjjFXMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="Google Maps"
                >
                    <MapPin size={20} />
                </a>
            </div>
            <div className="footer-links" style={{ marginTop: '0.5rem' }}>
                <a href="/impressum" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>Impressum</a>
            </div>
            <p className="footer-copyright">&copy; Kendo Shisha Lounge</p>
        </footer>
    );
};

export default Footer;
