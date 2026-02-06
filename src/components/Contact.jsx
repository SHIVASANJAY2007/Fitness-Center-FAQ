import React, { useState } from 'react';
import gymData from '../data/gymData';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 500);
    };

    return (
        <div className="contact-container fade-in">
            <div className="contact-content-wrapper">
                <section className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions? We're here to help.</p>

                    <div className="info-item">
                        <h3>Address</h3>
                        <p>{gymData.contact.address}</p>
                    </div>
                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>{gymData.contact.phone}</p>
                    </div>
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>{gymData.contact.email}</p>
                    </div>
                </section>

                <section className="contact-form-section">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn-primary">Send Message</button>
                        </form>
                    ) : (
                        <div className="success-message fade-in">
                            <h3>Message Sent!</h3>
                            <p>We'll get back to you shortly.</p>
                            <button className="btn-secondary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}>Send Another</button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Contact;
