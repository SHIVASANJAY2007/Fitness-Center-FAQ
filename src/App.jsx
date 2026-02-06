import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'About': return <About />;
      case 'Chatbot': return <Chatbot />;
      case 'Contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <header className="header-main">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
