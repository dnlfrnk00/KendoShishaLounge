import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { additivesMap } from '../data/additives';
import '../styles/InfoModal.css'; // Reusing InfoModal styles for consistency

interface AdditivesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdditivesModal: React.FC<AdditivesModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Handle click outside
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

    return (
        <div className={`info-modal-overlay ${isOpen ? 'active' : ''}`}>
            <div className={`info-modal ${isOpen ? 'active' : ''}`} ref={modalRef} style={{ maxHeight: '70vh' }}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                    <X size={24} />
                </button>

                <h2 className="modal-title">Zusatzstoffe</h2>

                <div className="modal-body" style={{ alignItems: 'flex-start' }}>
                    {Object.entries(additivesMap).map(([key, value]) => (
                        <div key={key} style={{
                            display: 'flex',
                            width: '100%',
                            padding: '8px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            color: 'var(--text-dim)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem'
                        }}>
                            <span style={{
                                fontWeight: 'bold',
                                color: 'var(--primary-red)',
                                width: '40px',
                                flexShrink: 0
                            }}>
                                {key}
                            </span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdditivesModal;
