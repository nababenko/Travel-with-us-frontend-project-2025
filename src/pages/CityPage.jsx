import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CityHero from '../components/CityHero';
import PlacesToVisit from '../components/PlacesToVisit';

function CityPage() {
    const cityName = "LONDON";

    return (
        <>
            <Header theme="header_dark" />

            <main>
                <CityHero cityName={cityName} />
                <PlacesToVisit />
                <section id="map_sect"></section>
            </main>

            <Footer />
        </>
    );
}

export default CityPage;