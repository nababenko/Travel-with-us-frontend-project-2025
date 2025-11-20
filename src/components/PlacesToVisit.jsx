import React from 'react';

const PlaceCard = ({ place, index }) => {
    const arrowPos = (index % 2 === 0) ? 'right' : 'left';

    const exploreContent = (
        <a
            className="ptv_explore"
            href={place.permanent_wiki_link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {arrowPos === 'left' && <img src="/assets/arrow.png" alt="explore" />}
            Explore
            {arrowPos === 'right' && <img src="/assets/arrow.png" alt="explore" />}
        </a>
    );

    return (
        <div className={`div${index + 1} ptv-${arrowPos}`}>
            <p className="ptv_name">{place.place_name}</p>
            <p className="ptv_head">{place.intriguing_title}</p>
            <p className="ptv_article">{place.description}</p>

            {exploreContent}
        </div>
    );
};


function PlacesToVisit({ placesData }) {
    if (!placesData || placesData.length === 0) {
        return (
            <section id="ptv_sect">
                <h2>Places to visit:</h2>
                <p>No destination data available for this city.</p>
            </section>
        );
    }

    return (
        <section id="ptv_sect">
            <h2>Places to visit:</h2>
            <div className="parent_ptv">
                {placesData.map((place, index) => (
                    <PlaceCard
                        key={place.place_name}
                        place={place}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default PlacesToVisit;