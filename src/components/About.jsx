import React from 'react';
import gymData from '../data/gymData';

function About() {
    return (
        <div className="about-container fade-in">
            <section className="about-hero">
                <h1>Gym <span className="highlight">Overview</span></h1>
                <p>Information about the current fitness center.</p>
            </section>

            <section className="facilities-grid">
                <h2>Facilities</h2>
                <div className="grid">
                    {gymData.facilities.map((fac, index) => (
                        <div key={index} className="facility-card">
                            <h3>{fac.name}</h3>
                            <p>{fac.description}</p>
                            <div className="hours-tag">Open: {fac.hours}</div>
                        </div>
                    ))}
                </div>
            </section>

            {gymData.equipment && (
                <section className="equipment-section" style={{ marginTop: '2rem' }}>
                    <h2>Equipment</h2>
                    <div className="chip-container" style={{ justifyContent: 'center' }}>
                        {gymData.equipment.map((item, idx) => (
                            <span key={idx} className="chip static">{item}</span>
                        ))}
                    </div>
                </section>
            )}

            {gymData.amenities && (
                <section className="amenities-section" style={{ marginTop: '2rem' }}>
                    <h2>Amenities</h2>
                    <div className="chip-container" style={{ justifyContent: 'center' }}>
                        {gymData.amenities.map((item, idx) => (
                            <span key={idx} className="chip static">{item}</span>
                        ))}
                    </div>
                </section>
            )}

            <section className="mission-section">
                <h2>About Erode Fitness</h2>
                <p>
                    We provide accurate information about fitness centers in Erode, Tamil Nadu.
                    Currently featuring details for specialized gyms offering Strength Training,
                    Cardio, MMA, and more.
                </p>
            </section>
        </div>
    );
}

export default About;
