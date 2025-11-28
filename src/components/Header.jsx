import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Імпортуйте Link

function Header({ theme }) {
    const headerClassName = theme || 'header_light';

    return (
        <header className={headerClassName}>
            <nav>
                {/* Використовуйте Link для внутрішньої навігації */}
                <Link to="/" id="travel_with_us">Travel <br /> <span>with us</span></Link>
                <div className="spacer"></div>
                <div className="menu_column">
                    <div><Link to="/">Home</Link></div>
                    <div id="lined_a"><Link to="/questionnaire">Form</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                </div>

                {/* 👇 ОНОВЛЕНЕ ПОСИЛАННЯ "Choose city" */}
                {/* Воно переходить на головну сторінку (/) і прокручує до елемента з ID 'countries_sect' */}
                <Link to="/#countries_sect">Choose<br />city</Link>
            </nav>
        </header>
    );
}

export default Header;