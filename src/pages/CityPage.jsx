import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CityHero from '../components/CityHero';
import PlacesToVisit from '../components/PlacesToVisit';
import MapSection from '../components/MapSection';
import travelGuideData from '../data/travel-guide.json';

function CityPage() {
    const { cityName: cityParam } = useParams();

    const searchCityName = cityParam
        ? cityParam.replace(/_/g, ' ')
        : null;

    const cityData = travelGuideData.destinations.find(
        (dest) => dest.capital_name === searchCityName
    );

    const displayCityName = cityData ? cityData.capital_name : "City Not Found";
    const placesToVisit = cityData ? cityData.places_to_visit : [];
    const finalDisplayName = displayCityName.toUpperCase();

    if (!cityData) {

        return (
            <>
                <Header theme="header_dark" />
                <main style={{ textAlign: 'center', padding: '50px' }}>
                    <h1>{finalDisplayName}</h1>
                    <p>Sorry, destination data is currently unavailable for {searchCityName || 'this city'}.</p>
                </main>
                <Footer />
            </>
        );
    }


    return (
        <>
            <Header theme="header_dark" />

            <main>
                <CityHero cityName={finalDisplayName} />

                <PlacesToVisit placesData={placesToVisit} />
                <MapSection placesData={placesToVisit} />
            </main>

            <Footer />
        </>
    );
}

export default CityPage;