import React from 'react';

// Компонент приймає пропс 'themeClass'
function Header({ theme }) {
    // Встановлюємо клас header. Якщо themeClass передано, використовуємо його.
    // Якщо ні (наприклад, пропс пропущений), використовуємо 'header_light' як значення за замовчуванням.
    const headerClassName = theme || 'header_light';

    return (
        <header className={headerClassName}>
            <nav>
                <a href="/main_page" id="travel_with_us">Travel <br /> <span>with us</span></a>
                <div className="spacer"></div>
                <div className="menu_column">
                    <div><a href="/main_page">Home</a></div>
                    <div id="lined_a"><a href="/questionnaire">Form</a></div>
                    <div><a href="/contact">Contact</a></div>
                </div>
                <a href="/choose_city">Choose<br />city</a>
            </nav>
        </header>
    );
}

export default Header;