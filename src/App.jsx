import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import QuestionnairePage from "./pages/QuestionnairePage";

/*import travelData from "./data/travelData";*/

function App() {
    const [data, setData] = useState(null);

 /*   useEffect(() => {
        setData(travelData);
    }, []);
*/
  /*  if (!data) {
        return <div>Loading...</div>;
    }*/

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/city" element={<CityPage />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />

            {/* 🧭 якщо користувач ввів неіснуючий маршрут — редирект на головну */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
