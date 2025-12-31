import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menu';


import BurgerMenu from '../components/BurgerMenu';
import Background3D from '../components/Background3D';
import Footer from '../components/Footer';
import '../styles/Menu.css';

const Menu: React.FC = () => {
    // State now stores Primitives (IDs/Strings) to prevent stale object references
    const [activeMainId, setActiveMainId] = useState<string>(menuData[0].id);
    const [activeSubName, setActiveSubName] = useState<string>(menuData[0].subCategories[0].name);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const subTabsRef = useRef<HTMLDivElement>(null);

    // DERIVED STATE: Always recalculate active objects based on current IDs
    // This source-of-truth approach prevents any mismatch between selected tab and content
    const activeMain = menuData.find(m => m.id === activeMainId) || menuData[0];

    // Ensure activeSub is ALWAYS a child of activeMain. 
    // If activeSubName doesn't exist in activeMain, fall back to the first subcategory.
    const activeSub = activeMain.subCategories.find(s => s.name === activeSubName) || activeMain.subCategories[0];

    // When main category changes, reset sub category to the first one of the NEW main category
    const handleMainChange = (id: string) => {
        setActiveMainId(id);
        const newMain = menuData.find(m => m.id === id) || menuData[0];
        setActiveSubName(newMain.subCategories[0].name);
    };

    // Scroll active sub tab into view
    useEffect(() => {
        if (subTabsRef.current) {
            const activeTab = subTabsRef.current.querySelector('.sub-tab.active');
            if (activeTab) {
                activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeSub]);

    // Helper to close tooltip with animation
    const closeTooltip = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowTooltip(false);
            setIsClosing(false);
        }, 400); // Match CSS animation duration
    };

    // Auto-dismiss tooltip after 5 seconds
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (showTooltip && !isClosing) {
            timer = setTimeout(() => {
                closeTooltip();
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showTooltip, isClosing]);

    return (
        <div className="menu-page">
            <Background3D />
            <div className="menu-background-glow"></div>
            <BurgerMenu />

            <div className="menu-header">
                <Link to="/" className="menu-logo-link">
                    <div className="menu-logo-small">
                        <img src="/images/kendo-logo.jpg" alt="Logo" />
                    </div>
                </Link>
                <h1 className="menu-title">SIGNATURE MENU</h1>
            </div>

            {/* Main Category Tabs (Shishas, Getränke, Essen) */}
            <div className="main-tabs-container">
                {menuData.map((category) => (
                    <button
                        key={category.id}
                        className={`main-tab ${activeMainId === category.id ? 'active' : ''}`}
                        onClick={() => handleMainChange(category.id)}
                    >
                        {category.label.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Sub Category Tabs (Only if more than 1 subcategory) */}
            {activeMain.subCategories.length > 1 && (
                <div className="sub-tabs-container" ref={subTabsRef}>
                    {activeMain.subCategories.map((sub, index) => {
                        const total = activeMain.subCategories.length;
                        const bgSize = `${total * 100}% 100%`;
                        const bgPos = `${(index / (total - 1 || 1)) * 100}% center`;

                        return (
                            <button
                                key={index}
                                className={`sub-tab ${activeSub.name === sub.name ? 'active' : ''}`}
                                onClick={() => setActiveSubName(sub.name)}
                                style={{
                                    backgroundSize: bgSize,
                                    backgroundPosition: bgPos
                                } as React.CSSProperties}
                            >
                                {sub.name}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Force component remount on main category change using key */}
            <div className="menu-content" key={activeMainId}>
                {/* Category Header */}
                <div className="category-header">
                    <h2 className="category-name">{activeSub.name}</h2>
                    {activeSub.subheading && <p className="cat-sub">{activeSub.subheading}</p>}
                    {activeSub.lowerSubheading && <p className="cat-lower">{activeSub.lowerSubheading}</p>}

                    {activeSub.extras && (
                        <div className="menu-extras">
                            {activeSub.extras.map((extra, i) => {
                                const isMixedPot = extra.label === 'Gemischter Topf';
                                return (
                                    <div key={i} className="menu-extra-row">
                                        <div
                                            className={`extra-label-container ${isMixedPot ? 'clickable' : ''}`}
                                            onClick={isMixedPot ? (e) => {
                                                e.stopPropagation();
                                                if (showTooltip) closeTooltip();
                                                else setShowTooltip(true);
                                            } : undefined}
                                        >
                                            <span className="extra-label">
                                                {extra.label}
                                            </span>
                                            {isMixedPot && (
                                                <button
                                                    className={`extra-info-btn ${showTooltip ? 'active' : ''}`}
                                                    aria-label="Info"
                                                >
                                                    i
                                                </button>
                                            )}

                                            {/* Tooltip anchored to the label */}
                                            {isMixedPot && showTooltip && (
                                                <div
                                                    className={`tooltip-bubble ${isClosing ? 'closing' : ''}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <div className="tooltip-content-text">
                                                        <strong>Mix 2 Sorten</strong> in einem Kopf für ein einzigartiges Geschmackserlebnis.
                                                    </div>
                                                    <div className="tooltip-progress-bar"></div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="extra-prices">
                                            {extra.oldPrice && <span className="extra-old-price">{extra.oldPrice}</span>}
                                            <span className="extra-price">{extra.price}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="menu-list">
                    {activeSub.items.map((item, index) => (
                        <div key={index} className="menu-item-row">
                            <div className="item-info">
                                <div className="item-header">
                                    <h3 className="item-name">{item.name}</h3>
                                    <span className="item-price">{item.price}</span>
                                </div>
                                <div className="item-details">
                                    {(item.zutaten || item.inhalt) && (
                                        <p className="item-desc">
                                            {item.zutaten} {item.zutaten && item.inhalt ? '|' : ''} {item.inhalt}
                                        </p>
                                    )}
                                    {item.zusatzstoffe && (
                                        <p className="item-additives">{item.zusatzstoffe}</p>
                                    )}
                                    {item.alk && <span className="item-badge">{item.alk}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Menu;
