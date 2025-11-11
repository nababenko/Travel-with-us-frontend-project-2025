import React from 'react';

function HowItWorks() {
    return (
        <section id="hiw_sect">
            <h2>How It Works</h2>
            <p id="step_text">Simple Steps:</p>
            <div className="hiw_wrapper">
                <div className="hiw_step step-1">
                    <span className="step-number">I</span>
                    <p className="step-text">Choose <br /> country</p>
                </div>
                <img src="/assets/Arrow1.png" alt="arrow" />
                <div className="hiw_step step-2">
                    <span className="step-number">II</span>
                    <p className="step-text">Explore a curated list of incredible places</p>
                </div>
                <img src="/assets/Arrow2.png" alt="arrow" />
                <div className="hiw_step step-3">
                    <span className="step-number">III</span>
                    <p className="step-text">Plan your unforgettable trip</p>
                </div>
            </div>
            <p id="hiw_line">TRAVEL! EXPLORE! ENJOY! WANDER! DISCOVER! EXPERIENCE! REVEAL!</p>
        </section>
    );
}

export default HowItWorks;