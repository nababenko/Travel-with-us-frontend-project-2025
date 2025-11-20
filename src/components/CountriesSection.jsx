import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanePath from "./PlanePath";

function CountriesSection() {
    const navigate = useNavigate();

    const [countries, setCountries] = useState([]);
    const [activeContinent, setActiveContinent] = useState(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleContinentClick = async (continent) => {
        setActiveContinent(continent);
        setVisible(true);
        setCountries([]);

        if (continent === "europe" || continent === "asia") {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://restcountries.com/v3.1/region/${continent}`
                );
                const data = await response.json();

                const countryList = data
                    .filter((c) => c.capital && c.capital.length > 0 && c.name.common !== 'Russia' && c.name.common !== 'Belarus')
                    .map((c) => ({
                        name: c.name.common,
                        capital: c.capital[0].replace(/\s/g, '_'),
                    }))
                    .sort((a, b) => {
                        return a.name.localeCompare(b.name);
                    });

                setCountries(countryList);
            } catch (error) {
                console.error("Помилка при завантаженні країн:", error);
            } finally {
                setLoading(false);
            }
        } else {
            setCountries([]);
        }
    };

    const handleCapitalClick = (capitalName) => {
        navigate(`/city/${capitalName}`);
    };

    return (
        <section id="countries_sect">
            <PlanePath activeContinent={activeContinent} />

            <div className="countries_wrapper">
                <div className="continents">
                    {["europe", "americas", "africa", "asia", "oceania"].map((c) => (
                        <p
                            key={c}
                            className={`continent_name ${c === activeContinent ? 'continent-active' : ''}`}
                            id={c}
                            onClick={() => handleContinentClick(c)}
                        >
                            {c.charAt(0).toUpperCase() + c.slice(1)}
                        </p>
                    ))}
                </div>

                <div
                    className="countries"
                    style={{
                        opacity: visible ? 1 : 0,
                        transition: "opacity 0.5s ease",
                    }}
                >
                    {loading ? (
                        <p className="progress">Loading...</p>
                    ) : countries.length > 0 ? (
                        countries.map((country) => (
                            <p
                                className="country"
                                key={country.name}
                                onClick={() => handleCapitalClick(country.capital)}
                                style={{ cursor: 'pointer' }}
                            >
                                {country.name}
                            </p>
                        ))
                    ) : (
                        <p className="progress">STILL IN PROGRESS</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CountriesSection;