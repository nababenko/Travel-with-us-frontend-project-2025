import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ theme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const headerClassName = theme || 'header_light';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    // Динамічно додаємо клас 'menu-open' до <header>
    const headerClasses = `${headerClassName} ${isMenuOpen ? 'menu-open' : ''}`;

    return (
        <header className={headerClasses}> 
            <nav>
                <Link to="/" id="travel_with_us" onClick={closeMenu}>Travel <br /> <span>with us</span></Link>
                
                {/* Кнопка-перемикач бургер-меню */}
                <div 
                    className="menu-toggle" 
                    onClick={toggleMenu}
                >
                    ☰
                </div> 

                {/* ВИДАЛЕНО: <div className="spacer"></div> */}
                
                {/* Обгортка для навігаційних посилань */}
                <div className="main_nav_links-wrapper"> 
                    <div className="menu_column">
                        {/* Додано closeMenu до кожного посилання */}
                        <div><Link to="/" onClick={closeMenu}>Home</Link></div>
                        <div id="lined_a"><Link to="/questionnaire" onClick={closeMenu}>Form</Link></div>
                        <div><Link to="/contact" onClick={closeMenu}>Contact</Link></div>
                    </div>

                    <Link to="/#countries_sect" onClick={closeMenu}>Choose<br />city</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;