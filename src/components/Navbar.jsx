import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
    const tabs = ['Home', 'About', 'Chatbot', 'Contact'];

    return (
        <nav className="navbar">
            <div className="brand">Fitness<span>FAQ</span></div>
            <div className="nav-links">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
