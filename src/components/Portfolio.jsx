import { motion } from 'framer-motion';
import { useState } from 'react';
import './Portfolio.css';

// Import images
import financeImg from '../assets/project-finance.png';
import crawlerImg from '../assets/project-crawler.png';
import movieImg from '../assets/project-movie.jpg';
import genaiImg from '../assets/project-genai.jpg';
import newsImg from '../assets/project-news.jpg';
import researchImg from '../assets/project-research.png';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Daily AI News",
            category: "Generative AI",
            description: "AI-powered daily news aggregator with automated podcast generation featuring two AI journalists",
            image: newsImg,
            github: "https://github.com/salmandshaikh/ai-daily-news",
            live: "https://salmandshaikh.github.io/ai-daily-news",
            featured: true,
            tags: ["React", "Python", "LLM", "GitHub Actions", "TTS"]
        },
        {
            title: "Modeling Student Behavior in Complex Learning Environments",
            category: "Data Science",
            description: "Research paper on machine learning models for educational analytics",
            image: researchImg,
            github: "https://link.springer.com/chapter/10.1007/978-3-031-11644-5_46",
            tags: ["Research", "ML", "Education"]
        },
        {
            title: "Movie Recommendation MLOps",
            category: "Data Science",
            description: "End-to-end ML pipeline for personalized movie recommendations",
            image: movieImg,
            github: "https://github.com/Salmanshaikh3223/Movie-Recommendation-System",
            tags: ["MLOps", "Recommendation", "Python"]
        },
        {
            title: "GenAI Bot NLTK Toolkit",
            category: "Generative AI",
            description: "Natural language processing chatbot using NLTK and generative AI",
            image: genaiImg,
            github: "https://github.com/salmandshaikh",
            tags: ["NLP", "NLTK", "Chatbot"]
        },
        {
            title: "Web Crawler",
            category: "Data Science",
            description: "Intelligent web scraping and data extraction system",
            image: crawlerImg,
            github: "https://github.com/salmandshaikh/Web-Crawler",
            tags: ["Python", "Scraping", "Data"]
        },
        {
            title: "Financial Market Forecasting",
            category: "Data Science",
            description: "Time series forecasting for financial markets using deep learning",
            image: financeImg,
            github: "https://github.com/salmandshaikh",
            tags: ["Time Series", "LSTM", "Finance"]
        }
    ];

    const categories = ['All', 'Data Science', 'Generative AI', 'MLOps'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="portfolio section" id="portfolio">
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="section-title"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Portfolio
                </motion.h2>

                <div className="filter-buttons">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`project-card glass ${project.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            {project.featured && (
                                <div className="featured-badge">
                                    <span>⭐ Featured</span>
                                </div>
                            )}

                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay"></div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>GitHub</span>
                                        <span className="arrow">→</span>
                                    </motion.a>
                                    {project.live && (
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link live"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>Live Demo</span>
                                            <span className="arrow">→</span>
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
