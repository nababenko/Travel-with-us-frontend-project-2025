import React, { useState } from 'react';

function QuestionnaireForm() {
    // В React дані форми зазвичай контролюються станом
   /* const [formData, setFormData] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Тут буде логіка відправки даних на сервер або обробки
        console.log("Form submitted with data:", formData);
        alert("Form sent! Check console for data.");
    }*/

    return (
        /*<form onSubmit={handleSubmit}>*/
        <form>
            <div className="form_column1">
                <label htmlFor="q1">What is your ideal travel style?</label>
                <input
                    id="q1"
                    type="text"
                    placeholder=" (e.g., active, cultural immersion, or relaxing, etc)"
                    required
                    /*value={formData.q1}*/
                    /*onChange={handleChange}*/
                />
                <label htmlFor="q2">What is your typical budget for a trip?</label>
                <input
                    id="q2"
                    type="text"
                    placeholder=" (e.g., budget-friendly, mid-range, or luxury, etc)"
                    required
                    /*value={formData.q2}
                    onChange={handleChange}*/
                />
                <label htmlFor="q3">Is there anything you strongly dislike?</label>
                <input
                    id="q3"
                    type="text"
                    placeholder=" (e.g., crowds, busy public transport, etc)"
                    required
                    /*value={formData.q3}
                    onChange={handleChange}*/
                />
            </div>
            <div className="form_column2">
                <label htmlFor="q4">What kind of climate do you prefer?</label>
                <input
                    id="q4"
                    type="text"
                    placeholder=" (e.g., warm, mild, or cold and sunny, etc)"
                    required
                    /*value={formData.q4}
                    onChange={handleChange}*/
                />
                <label htmlFor="q5">What are your main interests?</label>
                <input
                    id="q5"
                    type="text"
                    placeholder=" (e.g., history, nature, or nightlife, etc)"
                    required
                    /*value={formData.q5}
                    onChange={handleChange}*/
                />
                <button id="form_button" type="submit">SEND</button>
            </div>
        </form>
    );
}

export default QuestionnaireForm;