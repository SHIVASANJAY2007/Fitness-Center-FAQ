import React from 'react';

function Home() {
    return (
        <div className="home-container fade-in">
            <section className="hero-section">
                <div className="hero-content">
                    <h1><span className="highlight">Fitness FAQ</span> Assistant</h1>
                    <p className="hero-subtitle">Your guide to Fitness Centers in Erode.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Join Now</button>
                        <button className="btn-secondary">Explore Classes</button>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <h3>24/7 Access</h3>
                    <p>Train on your schedule with round-the-clock access to our state-of-the-art facilities.</p>
                </div>
                <div className="feature-card">
                    <h3>Expert Trainers</h3>
                    <p>Achieve your goals with guidance from our certified fitness professionals.</p>
                </div>
                <div className="feature-card">
                    <h3>Premium Amenities</h3>
                    <p>Recover in our sauna, swim in our Olympic pool, or relax in the member's lounge.</p>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>What Our Members Say</h2>
                <div className="testimonial">
                    <p>"IronPulse changed my life. The community and equipment are unmatched."</p>
                    <span>- Sarah J.</span>
                </div>
            </section>
        </div>
    );
}

export default Home;
