import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import CardsSection from '../components/CardsSection';
import CountriesSection from '../components/CountriesSection';
import StatsSection from '../components/StatsSection';

function MainPage() {
    return (
        <>
            <Header theme="header_dark" />
            <main>
                <HeroSection />
                <HowItWorks />
                <CardsSection />
                <CountriesSection />
                <StatsSection />
            </main>
            <Footer />
        </>
    );
}

export default MainPage;