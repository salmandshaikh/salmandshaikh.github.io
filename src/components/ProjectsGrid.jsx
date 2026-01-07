import { motion } from 'framer-motion';
import './ProjectsGrid.css';

// Import images
import financeImg from '../assets/project-finance.png';
import crawlerImg from '../assets/project-crawler.png';
import movieImg from '../assets/project-movie.jpg';
import genaiImg from '../assets/project-genai.jpg';
import newsImg from '../assets/project-news.jpg';
import researchImg from '../assets/research-logo.svg';

const ProjectsGrid = () => {
    const projects = [
        {
            title: "Daily AI News",
            description: "AI-powered daily news aggregator with automated podcast generation featuring two AI journalists discussing the latest in AI.",
            image: newsImg,
            techStack: ['⚛️', '🐍', '🤖', '⚙️'],
            techNames: ['React', 'Python', 'LLM', 'GitHub Actions'],
            github: "https://github.com/salmandshaikh/ai-daily-news",
            live: "https://salmandshaikh.github.io/ai-daily-news",
            featured: true
        },
        {
            title: "Movie Recommendation MLOps",
            description: "End-to-end ML pipeline for personalized movie recommendations with collaborative filtering and content-based approaches.",
            image: movieImg,
            techStack: ['🐍', '🔬', '🐳'],
            techNames: ['Python', 'Scikit-learn', 'Docker'],
            github: "https://github.com/Salmanshaikh3223/Movie-Recommendation-System"
        },
        {
            title: "GenAI Bot NLTK Toolkit",
            description: "Natural language processing chatbot powered by NLTK and generative AI for intelligent conversations.",
            image: genaiImg,
            techStack: ['🐍', '💬', '🤖'],
            techNames: ['Python', 'NLTK', 'GenAI'],
            github: "https://github.com/salmandshaikh"
        },
        {
            title: "Financial Market Forecasting",
            description: "Time series forecasting for financial markets using LSTM neural networks and deep learning techniques.",
            image: financeImg,
            techStack: ['🐍', '📈', '🧠'],
            techNames: ['Python', 'LSTM', 'TensorFlow'],
            github: "https://github.com/salmandshaikh"
        },
        {
            title: "Web Crawler",
            description: "Intelligent web scraping system for automated data extraction and analysis at scale.",
            image: crawlerImg,
            techStack: ['🐍', '🕷️', '📊'],
            techNames: ['Python', 'BeautifulSoup', 'Pandas'],
            github: "https://github.com/salmandshaikh/Web-Crawler"
        },
        {
            title: "Research: Student Behavior Modeling",
            description: "Published research on ML models for educational analytics in complex learning environments.",
            image: researchImg,
            techStack: ['📄', '🔬', '🎓'],
            techNames: ['Research', 'ML', 'Education'],
            github: "https://link.springer.com/chapter/10.1007/978-3-031-11644-5_46"
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className={`project-card glass ${project.featured ? 'featured' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="project-image-wrapper">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="project-overlay"></div>
                            {project.featured && (
                                <div className="featured-badge">⭐ Featured</div>
                            )}
                        </div>

                        <div className="project-content">
                            {/* Tech Stack Icons */}
                            <div className="tech-stack">
                                {project.techStack.map((icon, i) => (
                                    <div
                                        key={i}
                                        className="tech-icon"
                                        title={project.techNames[i]}
                                        style={{ zIndex: project.techStack.length - i }}
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-links">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    whileHover={{ x: 5 }}
                                >
                                    <span>View Project</span>
                                    <span className="link-arrow">→</span>
                                </motion.a>
                                {project.live && (
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link live"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span>Live Demo</span>
                                        <span className="link-arrow">→</span>
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        {/* Animated border */}
                        <div className="card-border"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;
