import NeuralBackground from './components/NeuralBackground';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProjectsGrid from './components/ProjectsGrid';
import Journey from './components/Journey';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <NeuralBackground />
            <FloatingNav />
            <main className="main-content">
                <Hero />
                <BentoGrid />
                <ProjectsGrid />
                <Journey />
                <Footer />
            </main>
        </div>
    );
}

export default App;
