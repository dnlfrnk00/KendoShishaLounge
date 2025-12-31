import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menu';
import type { MainCategory, SubCategory } from '../types/menu';
import BurgerMenu from '../components/BurgerMenu';
import Background3D from '../components/Background3D';
import Footer from '../components/Footer';
import '../styles/Menu.css';

const Menu: React.FC = () => {
    const [activeMain, setActiveMain] = useState<MainCategory>(menuData[0]);
    const [activeSub, setActiveSub] = useState<SubCategory>(menuData[0].subCategories[0]);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const subTabsRef = useRef<HTMLDivElement>(null);

    // Derived state to ensure we always display valid subcategories for the active main category
    // This fixes the bug where Shishas heading might show Getränke tab names during transitions
    const displayedSub = activeMain.subCategories.find(sub => sub.name === activeSub.name) || activeMain.subCategories[0];

    // When main category changes, reset sub category to the first one
    const handleMainChange = (category: MainCategory) => {
        setActiveMain(category);
        setActiveSub(category.subCategories[0]);
    };

    // Scroll active sub tab into view
    useEffect(() => {
        if (subTabsRef.current) {
            const activeTab = subTabsRef.current.querySelector('.sub-tab.active');
            if (activeTab) {
                activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [displayedSub]);

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
                        className={`main-tab ${activeMain.id === category.id ? 'active' : ''}`}
                        onClick={() => handleMainChange(category)}
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
                                className={`sub-tab ${displayedSub.name === sub.name ? 'active' : ''}`}
                                onClick={() => setActiveSub(sub)}
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

            <div className="menu-content">
                {/* Category Header */}
                <div className="category-header">
                    <h2 className="category-name">{displayedSub.name}</h2>
                    {displayedSub.subheading && <p className="cat-sub">{displayedSub.subheading}</p>}
                    {displayedSub.lowerSubheading && <p className="cat-lower">{displayedSub.lowerSubheading}</p>}

                    {displayedSub.extras && (
                        <div className="menu-extras">
                            {displayedSub.extras.map((extra, i) => {
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
                    {displayedSub.items.map((item, index) => (
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
