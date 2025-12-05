import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Info, Instagram, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import Background3D from '../components/Background3D';
import OpeningStatus from '../components/OpeningStatus';
import InfoModal from '../components/InfoModal';
import '../styles/Home.css';

// Carousel images
const heroImages = [
    '/images/bar-1.jpg',
    '/images/lounge-1.jpg',
    '/images/lounge-2.jpg',
];

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Preload all images on mount for smooth transitions
    useEffect(() => {
        heroImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    // Auto-rotate images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <Background3D />
            <div className="hero-glow"></div>

            <div className="home-content-wrapper">
                <div className="home-logo-container">
                    <img src="/images/kendo-logo.jpg" alt="Kendo Lounge Logo" className="main-logo-img" />
                </div>

                <OpeningStatus />

                <div className="home-text-content">
                    <h2 className="welcome-text">Willkommen <br />zur Kendo Lounge</h2>
                </div>

                <div className="hero-image-container">
                    {heroImages.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Kendo Lounge ${index + 1}`}
                            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
                        />
                    ))}
                    <div className="carousel-indicators">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="owner-info">
                    <p className="owner-text">Inhaber: Maxwell Jegel</p>
                </div>

                <div className="action-container">
                    <Link to="/menu" className="primary-button">
                        ZUM MENÜ <ArrowRight className="arrow-icon" size={20} />
                    </Link>
                </div>

                <div className="secondary-links">
                    <a
                        href="https://g.page/r/CRBuUh5qxjjeEAg/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item"
                    >
                        <Star className="link-icon" size={20} />
                        <span className="link-text">Bewerte Uns</span>
                        <ChevronRight className="link-arrow" size={20} />
                    </a>
                    <button
                        className="link-item"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Info className="link-icon" size={20} />
                        <span className="link-text">Mehr Informationen</span>
                        <ChevronRight className="link-arrow" size={20} />
                    </button>
                    <a
                        href="https://www.instagram.com/kendolounge/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item"
                    >
                        <Instagram className="link-icon" size={20} />
                        <span className="link-text">Instagram</span>
                        <ChevronRight className="link-arrow" size={20} />
                    </a>
                    <a
                        href="https://goo.gl/maps/euN5YTYUv6HjjFXMA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item"
                    >
                        <MapPin className="link-icon" size={20} />
                        <span className="link-text">Anfahrt</span>
                        <ChevronRight className="link-arrow" size={20} />
                    </a>
                </div>
            </div>

            <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Home;

