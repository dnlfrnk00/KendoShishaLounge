import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Layout.css'; // We'll create this next

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="layout-container">
            <div className="background-shader"></div>

            <main className={`main-content ${isHome ? 'home-content' : ''}`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
