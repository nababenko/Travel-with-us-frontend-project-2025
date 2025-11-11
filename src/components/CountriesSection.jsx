import React from 'react';

function CountriesSection() {
    return (
        <section id="countries_sect">
            <div className="plane_wrapper"><hr /></div>
            <div className="countries_wrapper">
                <div className="continents">
                    <p className="continent_name" id="europe">Europe</p>
                    <p className="continent_name" id="americas">Americas</p>
                    <p className="continent_name" id="africa">Africa</p>
                    <p className="continent_name" id="asia">Asia</p>
                    <p className="continent_name" id="oceania">Oceania</p>
                </div>
                <div className="countries">
                    <p className="progress">STILL IN PROGRESS</p>
                </div>
            </div>
        </section>
    );
}

export default CountriesSection;