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

    const subTabsRef = useRef<HTMLDivElement>(null);

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
    }, [activeSub]);

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
                        // Calculate background position to span the gradient across all items
                        // We use a wide background size (e.g., 100% * total) and shift it based on index
                        const bgSize = `${total * 100}% 100%`;
                        const bgPos = `${(index / (total - 1 || 1)) * 100}% center`;

                        return (
                            <button
                                key={index}
                                className={`sub-tab ${activeSub.name === sub.name ? 'active' : ''}`}
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
                {/* Category Header Image & Info */}
                <div className="category-header">
                    {/* We can use the imgSrc here as a banner if desired, or just keep it text based for minimalism */}
                    {/* <img src={activeSub.imgSrc} alt={activeSub.name} className="category-banner" /> */}

                    <h2 className="category-name">{activeSub.name}</h2>
                    {activeSub.subheading && <p className="cat-sub">{activeSub.subheading}</p>}
                    {activeSub.lowerSubheading && <p className="cat-lower">{activeSub.lowerSubheading}</p>}
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

