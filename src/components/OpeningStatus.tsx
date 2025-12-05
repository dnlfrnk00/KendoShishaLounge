import React, { useEffect, useState } from 'react';

const OpeningStatus: React.FC = () => {
    const [status, setStatus] = useState<string>('Geschlossen');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const checkOpeningStatus = () => {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();

            // Set the opening and closing times
            const openingHour = 18; // 6 PM
            const openingMinute = 30;
            const closingHour = 1; // 1 AM (next day)
            const closingMinute = 0;

            // Convert the current time to minutes for easier comparison
            const currentTimeInMinutes = currentHour * 60 + currentMinute;

            // Convert the opening and closing times to minutes for comparison
            const openingTimeInMinutes = openingHour * 60 + openingMinute;
            const closingTimeInMinutes = closingHour * 60 + closingMinute;

            // Check if the current time falls within the opening time range
            // Logic: 
            // If closing time is smaller than opening time (e.g. 1 AM < 6 PM), it means it spans midnight.
            // We are open if:
            // 1. Current time >= opening time (e.g. >= 18:30)
            // OR
            // 2. Current time < closing time (e.g. < 01:00)

            let isOpenNow = false;

            if (closingTimeInMinutes < openingTimeInMinutes) {
                // Spans midnight
                if (currentTimeInMinutes >= openingTimeInMinutes || currentTimeInMinutes < closingTimeInMinutes) {
                    isOpenNow = true;
                }
            } else {
                // Same day
                if (currentTimeInMinutes >= openingTimeInMinutes && currentTimeInMinutes < closingTimeInMinutes) {
                    isOpenNow = true;
                }
            }

            if (isOpenNow) {
                setStatus('Geöffnet');
                setIsOpen(true);
            } else {
                setStatus('Geschlossen');
                setIsOpen(false);
            }
        };

        checkOpeningStatus();
        const interval = setInterval(checkOpeningStatus, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`opening-status ${isOpen ? 'open' : 'closed'}`} style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: isOpen ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
            color: isOpen ? '#4ade80' : '#f87171',
            border: `1px solid ${isOpen ? '#4ade80' : '#f87171'}`,
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            backdropFilter: 'blur(5px)',
            marginTop: '1rem'
        }}>
            {status}
        </div>
    );
};

export default OpeningStatus;
