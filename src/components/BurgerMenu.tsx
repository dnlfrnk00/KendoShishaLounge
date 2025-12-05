import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X, Home, Phone, MapPin, Star, Info } from 'lucide-react';
import '../styles/BurgerMenu.css'; // We'll create this
import Footer from './Footer';
import AdditivesModal from './AdditivesModal';

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdditivesOpen, setIsAdditivesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="burger-toggle" onClick={toggleMenu}>
                <MenuIcon size={28} color="#fff" />
            </button>

            <div className={`burger-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

            <div className={`burger-drawer ${isOpen ? 'open' : ''}`}>
                <button className="burger-close" onClick={toggleMenu}>
                    <X size={28} color="#fff" />
                </button>

                <div className="burger-content">
                    <div className="burger-logo">
                        <h2>KENDO</h2>
                        <span>LOUNGE</span>
                    </div>

                    <nav className="burger-nav">
                        <Link to="/" className="burger-link" onClick={toggleMenu}>
                            <Home size={20} />
                            <span>Startseite</span>
                        </Link>
                        <a
                            href="https://search.google.com/local/writereview?placeid=ChIJ2QL-NvPvnkcREG5SHmrGOD4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="burger-link"
                            onClick={toggleMenu}
                        >
                            <Star size={20} />
                            <span>Bewerte Uns</span>
                        </a>
                        {/* <Link to="/menu" className="burger-link" onClick={toggleMenu}>
                            <Coffee size={20} />
                            <span>Speisekarte</span>
                        </Link> */}
                        <a href="tel:082319249059" className="burger-link" onClick={toggleMenu}>
                            <Phone size={20} />
                            <span>Tisch reservieren</span>
                        </a>
                        <a
                            href="https://goo.gl/maps/euN5YTYUv6HjjFXMA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="burger-link"
                            onClick={toggleMenu}
                        >
                            <MapPin size={20} />
                            <span>Anfahrt</span>
                        </a>
                        <button
                            className="burger-link"
                            onClick={() => {
                                setIsAdditivesOpen(true);
                                // Don't close menu immediately so user can return contextually, 
                                // or close it if preferred. Let's keep menu open behind or close it? 
                                // User said "onclick a modal opens". Usually better to keep menu or close it.
                                // Let's close menu to give full focus to modal which is also an overlay.
                                setIsOpen(false);
                            }}
                            style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer' }}
                        >
                            <Info size={20} />
                            <span>Zusatzstoffe</span>
                        </button>
                    </nav>
                </div>

                <div className="burger-footer-wrapper">
                    <Footer />
                </div>
            </div>

            <AdditivesModal isOpen={isAdditivesOpen} onClose={() => setIsAdditivesOpen(false)} />
        </>
    );
};

export default BurgerMenu;
