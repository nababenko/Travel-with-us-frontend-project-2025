import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

import HomePage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ScrollToHash from "./components/ScrollToHash";


function App() {
    const [data, setData] = useState(null);

    return (
        // Обгортаємо, оскільки повертаємо більше одного елемента
        <>
            {/* 👈 РОЗМІЩУЄМО ТУТ: ScrollToHash тепер слухає маршрути */}
            <ScrollToHash />

            <Routes>
                {/* ТУТ МАЮТЬ БУТИ ЛИШЕ <Route> або <React.Fragment> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/city/:cityName" element={<CityPage />} />
                <Route path="/questionnaire" element={<QuestionnairePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

export default App;