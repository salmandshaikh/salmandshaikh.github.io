import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.p 
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm
                    </motion.p>
                    <motion.h1 
                        className="hero-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <span className="gradient-text">Salman Shaikh</span>
                    </motion.h1>
                    <motion.p 
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Data Scientist & ML Engineer
                    </motion.p>
                    <motion.p 
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Transforming data into intelligent solutions with Machine Learning, 
                        NLP, and Generative AI
                    </motion.p>
                </motion.div>

                <motion.button
                    className="hero-cta moving-border"
                    onClick={scrollToProjects}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="cta-text">View My Projects</span>
                    <span className="cta-arrow">→</span>
                </motion.button>

                <motion.div 
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ 
                        opacity: { delay: 1.5 },
                        y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
                    }}
                >
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span>Scroll Down</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
