import React from 'react';

function CityHero({ cityName }) {
    return (
        <section id="cn_sect">
            <img src="/assets/globe.png" alt="globe_img" />
            <h3 id="city_name">{cityName}</h3>
        </section>
    );
}

export default CityHero;