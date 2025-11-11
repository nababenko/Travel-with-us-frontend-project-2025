import React from 'react';

// Дані винесені для ітерації
const placesData = [
    {
        id: 1,
        name: "Tower of London",
        head: "The Timeless Majesty of the tower Of London",
        article: "This historic fortress on the River Thames has served as a royal palace, a prison, and a treasury. It holds centuries of dark secrets and fascinating stories, including the infamous legend of the Princes in the Tower.",
        arrowPos: 'right' // Стрілка після тексту
    },
    {
        id: 2,
        name: "London Eye",
        head: "Soaring Views and Modern Marvel",
        article: "This iconic cantilevered observation wheel offers breathtaking panoramic views of the city. A full rotation takes about 30 minutes, giving you plenty of time to spot famous landmarks like the Houses of Parliament and Buckingham Palace.",
        arrowPos: 'left' // Стрілка перед текстом
    },
    {
        id: 3,
        name: "Buckingham Palace",
        head: "Royal Splendor and Tradition",
        article: "The official London residence of the British monarch, Buckingham Palace is a symbol of the UK's royal heritage.",
        arrowPos: 'right'
    },
    {
        id: 4,
        name: "Westminster Abbey",
        head: "A Gateway to the Past",
        article: "This magnificent Gothic church has been the site of royal coronations, weddings, and burials for centuries. It's a masterpiece of medieval architecture, with a stunning interior and intricate stained-glass windows.",
        arrowPos: 'right'
    },
    {
        id: 5,
        name: "Tower Bridge",
        head: "A Bridge Between Old and New",
        article: "This iconic structure is one of the city's most recognizable symbols. It creates a striking silhouette against the sky.",
        arrowPos: 'left'
    },
];

const PlaceCard = ({ place, className }) => {
    const exploreContent = (
        <a className="ptv_explore">
            {place.arrowPos === 'left' && <img src="/assets/arrow.png" alt="explore" />}
            Explore
            {place.arrowPos === 'right' && <img src="/assets/arrow.png" alt="explore" />}
        </a>
    );

    return (
        <div className={className}>
            {place.id === 5 && exploreContent}

            <p className="ptv_name">{place.name}</p>
            <p className="ptv_head">{place.head}</p>
            <p className="ptv_article">{place.article}</p>

            {place.id !== 5 && exploreContent}
        </div>
    );
};


function PlacesToVisit() {
    return (
        <section id="ptv_sect">
            <h2>Places to visit:</h2>
            <div className="parent_ptv">
                {placesData.map((place, index) => (
                    <PlaceCard
                        key={place.id}
                        place={place}
                        className={`div${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default PlacesToVisit;