import React, { useState } from 'react';

function QuestionnaireForm({ onResult }) {
    const [formData, setFormData] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/ai/evaluate-survey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            onResult(data.city);  // <- передаємо назву столиці нагору
        } catch (err) {
            console.error(err);
            onResult("Error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form_column1">
                <label htmlFor="q1">What is your ideal travel style?</label>
                <input id="q1" type="text" required value={formData.q1} placeholder=" (e.g., active, cultural immersion, or relaxing, etc)" onChange={handleChange}/>

                <label htmlFor="q2">What is your typical budget for a trip?</label>
                <input id="q2" type="text" required value={formData.q2} placeholder=" (e.g., budget-friendly, mid-range, or luxury, etc)" onChange={handleChange}/>

                <label htmlFor="q3">Is proximity to nature important for you?</label>
                <input id="q3" type="text" required value={formData.q3} placeholder=" (e.g., close to the sea, in the mountains, lots of parks, etc)" onChange={handleChange}/>
            </div>

            <div className="form_column2">
                <label htmlFor="q4">What kind of climate do you prefer?</label>
                <input id="q4" type="text" required value={formData.q4} placeholder=" (e.g., warm, mild, or cold and sunny, etc)" onChange={handleChange}/>

                <label htmlFor="q5">What are your main interests?</label>
                <input id="q5" type="text" required value={formData.q5} placeholder=" (e.g., history, nature, or nightlife, etc)" onChange={handleChange}/>

                <button id="form_button" type="submit">SEND</button>
            </div>
        </form>
    );
}

export default QuestionnaireForm;
