import { useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('About');

    const renderSection = () => {
        switch (activeSection) {
            case 'About':
                return <About />;
            case 'Resume':
                return <Resume />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    };

    return (
        <div className="App">
            <NeuralBackground />
            <Sidebar />
            <main className="main-content">
                <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
                {renderSection()}
            </main>
        </div>
    );
}

export default App;
