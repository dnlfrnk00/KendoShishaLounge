import React, { useEffect, useRef } from 'react';
import { X, MapPin, Clock, Phone } from 'lucide-react';
import '../styles/InfoModal.css';
import Footer from './Footer';

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Handle escape key to close
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    // Determine opening status
    const getOpeningStatus = (): { isOpen: boolean; text: string } => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentMinutes = hours * 60 + minutes;

        // Opening hours: 18:30 - 01:00
        const openTime = 18 * 60 + 30; // 18:30
        // After 18:30 or before 01:00 is open
        const isCurrentlyOpen = currentMinutes >= openTime || currentMinutes < 60;

        return {
            isOpen: isCurrentlyOpen,
            text: isCurrentlyOpen ? 'Jetzt geöffnet' : 'Geschlossen'
        };
    };

    const status = getOpeningStatus();

    return (
        <div className={`info-modal-overlay ${isOpen ? 'active' : ''}`}>
            <div className={`info-modal ${isOpen ? 'active' : ''}`} ref={modalRef}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <h2 className="modal-title">Mehr Informationen</h2>

                <div className="modal-body">
                    <h3 className="modal-business-name">Kendo Shisha Lounge</h3>

                    <a
                        href="https://goo.gl/maps/euN5YTYUv6HjjFXMA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-info-item"
                    >
                        <MapPin className="modal-icon" size={20} />
                        <span>
                            Bürgermeister-Wohlfarth-Straße 85c,<br />
                            86343 Königsbrunn
                        </span>
                    </a>

                    <div className="modal-info-item">
                        <Clock className="modal-icon" size={20} />
                        <span>
                            Montag - Sonntag: 18:30 - 01:00 Uhr
                            <span className={`opening-status ${status.isOpen ? 'open' : 'closed'}`}>
                                {status.text}
                            </span>
                        </span>
                    </div>

                    <a href="tel:082319249059" className="modal-info-item">
                        <Phone className="modal-icon" size={20} />
                        <span>08231 9249059</span>
                    </a>
                </div>

                {/* <div className="modal-social">
                    <a
                        href="https://www.instagram.com/kendolounge/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Instagram"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="https://goo.gl/maps/euN5YTYUv6HjjFXMA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Google Maps"
                    >
                        <MapPin size={24} />
                    </a>
                </div> */}

                {/* <p className="modal-copyright">&copy; Kendo Shisha Lounge</p> */}
                <Footer />
            </div>
        </div>
    );
};

export default InfoModal;
