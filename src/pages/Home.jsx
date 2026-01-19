import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Skills />
            <ProjectsGrid />
            <Journey />
            <Contact />
        </div>
    );
};

export default Home;
