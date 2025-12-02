import React, { useState } from 'react';
import Header from '../components/Header';
import QuestionnaireForm from '../components/QuestionnaireForm';
import Footer from '../components/Footer';

function QuestionnairePage() {
    const [city, setCity] = useState("");
    document.title = "Traveler's Questionnaire";

    const pageStyle = {
        backgroundImage: 'url(assets/form_background.jpg)',
        backgroundSize: 'cover',
        color: 'white',
        minHeight: '100vh',
        position: 'absolute',
        top:0,
        left:0,
    };
    return (
        <div style={pageStyle}>
            <Header />
            <main>
                <div id="form_wrapper">
                    <h3>Traveler's Questionnaire</h3>

                    <QuestionnaireForm onResult={(capital) => setCity(capital)} />

                    <p id="form_result">
                        Best city for you is: <span id="city_result">{city}</span>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default QuestionnairePage;
