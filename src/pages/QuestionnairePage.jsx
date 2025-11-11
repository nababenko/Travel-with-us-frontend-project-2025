import React from 'react';
import Header from '../components/Header';
import QuestionnaireForm from '../components/QuestionnaireForm';
import Footer from '../components/Footer';

function QuestionnairePage() {

    const pageStyle = {
        backgroundImage: 'url(assets/form_background.jpg)',
        backgroundSize: 'cover',
        color: 'white',
        minHeight: '100vh',
    };

    return (
        <div style={pageStyle}>
            <Header />
            <main>
                <div id="form_wrapper">
                    <h3>Traveler's Questionnaire</h3>
                    <QuestionnaireForm />
                    <p id="form_result">Best city for you is: <span id="city_result">City</span></p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default QuestionnairePage;