import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NeuralBackground from './components/NeuralBackground';
import FloatingNav from './components/FloatingNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NeuralBackground />
                <FloatingNav />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
