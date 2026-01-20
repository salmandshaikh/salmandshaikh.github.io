import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';

// Import background images
import bg1 from './assets/background-1.png';
import bg2 from './assets/background-2.png';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Background Images */}
                <div className="background-wrapper">
                    <img src={bg1} alt="" className="background-image bg-1" />
                    <img src={bg2} alt="" className="background-image bg-2" />
                    <img src={bg1} alt="" className="background-image bg-1" />
                    <img src={bg2} alt="" className="background-image bg-2" />
                    <div className="background-blend"></div>
                </div>
                
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
