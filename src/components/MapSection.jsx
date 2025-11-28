import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const convertCoordinates = (coordinatesString) => {
    if (!coordinatesString) return null;

    const parts = coordinatesString.split(',');

    if (parts.length === 2) {
        const lat = parseFloat(parts[0].trim());
        const lon = parseFloat(parts[1].trim());

        if (!isNaN(lat) && !isNaN(lon)) {
            // Leaflet очікує [LAT, LON]
            return [lat, lon];
        }
    }
    return null;
};


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


function MapSection({ placesData }) {

    const markers = useMemo(() => {
        if (!placesData || placesData.length === 0) return [];

        return placesData.map(place => {
            const coords = convertCoordinates(place.coordinates);
            if (coords) {
                return {
                    position: coords,
                    name: place.place_name,
                    title: place.intriguing_title,
                };
            }
            return null;
        }).filter(m => m !== null);
    }, [placesData]);

    let centerPosition = [0, 0];
    let mapZoom = 5;

    if (markers.length > 0) {
        centerPosition = markers[0].position;
        mapZoom = 13;
    }

    if (markers.length === 0) {
        return (
            <section id="map_sect" style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Locations on Map</h2>
                <p>Map data is unavailable or coordinates are missing for this city.</p>
            </section>
        );
    }

    return (
        <section id="map_sect">
            <h2>Locations on Map:</h2>
            <div style={{ height: '65vh', width: '80%' }}>
                <MapContainer
                    center={centerPosition}
                    zoom={mapZoom}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker.position}>
                            <Popup>
                                <strong>{marker.name}</strong><br />
                                {marker.title}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
}

export default MapSection;