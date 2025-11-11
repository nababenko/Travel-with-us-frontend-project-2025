import React from 'react';

function CardsSection() {
    return (
        <section id="card_sect">
            <div className="card_wrapper">
                <div className="card_back card1">
                    <div className="card">
                        <p className="card_head">Find Your Next Favorite Place</p>
                        <p className="card_text">Our curated guides help you go beyond the well-worn path.
                            Discover unique neighborhoods, quirky local shops, and hidden art installations
                            that tell the true story of a city. Whether you're a foodie, an art lover, or a
                            history buff, your next adventure awaits.</p>
                        <p className="card_footer">Browse All Capitals</p>
                    </div>
                </div>
                <p>Explore Urban Adventures</p>
            </div>
            <div className="card_wrapper">
                <div className="card_back card2">
                    <div className="card">
                        <p className="card_head">Uncover the Best-Kept Secrets</p>
                        <p className="card_text">Why follow a guidebook when you can have insider knowledge?
                            We've gathered tips from locals to show you where to find the best street food,
                            the most charming cafes, and the most stunning sunset spots that tourists often miss.
                            Your authentic travel experience starts here.</p>
                        <p className="card_footer">Find Your City</p>
                    </div>
                </div>
                <p>Live Like a Local</p>
            </div>
        </section>
    );
}

export default CardsSection;