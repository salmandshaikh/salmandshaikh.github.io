import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="gradient-text">Salman Shaikh</span>
                    </motion.h1>
                    <motion.p
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Data Scientist
                    </motion.p>

                    <motion.div
                        className="hero-about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3>About Me</h3>
                        <p>
                            I am a Data Scientist with over 4 years of experience building and deploying machine learning and deep learning solutions across finance, retail, and telecom sectors. My core strengths include natural language processing, time series forecasting, and large language models (LLMs). I've developed models that improved business KPIs by up to 30%, working with tools like TensorFlow, PyTorch, and Scikit-learn, and deploying them across AWS, GCP, and Azure environments.
                        </p>
                        <p>
                            I specialize in scalable ML systems—designing robust data pipelines using Apache Spark, Kafka, and Airflow, and deploying models with FastAPI and Kubernetes. With a strong focus on MLOps, feature engineering, and model optimization, I bring together data science and engineering to deliver production-grade, responsible AI solutions that drive real business impact.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <Link to="/resume" className="hero-cta moving-border">
                        <span className="cta-text">Experience</span>
                    </Link>
                </motion.div>

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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
