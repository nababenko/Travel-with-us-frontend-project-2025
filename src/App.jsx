import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import QuestionnairePage from "./pages/QuestionnairePage";


function App() {
    const [data, setData] = useState(null);


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/city/:cityName" element={<CityPage />} />

            <Route path="/questionnaire" element={<QuestionnairePage />} />

            {/*  якщо користувач ввів неіснуючий маршрут — редирект на головну */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;