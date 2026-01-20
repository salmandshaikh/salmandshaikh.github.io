import { motion } from 'framer-motion';
import './ProjectsGrid.css';

// Import images
import crawlerImg from '../assets/project-crawler.png';
import movieImg from '../assets/project-movie.jpg';
import genaiImg from '../assets/project-genai.jpg';
import newsImg from '../assets/project-news.jpg';
import springerImg from '../assets/springer.jpeg';
import stockmarketImg from '../assets/project-stockmarket.jpeg';
import pricetrackerImg from '../assets/project-pricetracker.jpeg';

const ProjectsGrid = () => {
    const projects = [
        {
            title: "Research Paper: Student Behaviour Modeling",
            description: "Published in International Conference for Artificial Intelligence in Education and Lecture Notes in Computer Science (LNCS) Volume 13355.",
            image: springerImg,
            techStack: ['📄', '🔬', '🎓', '🤖'],
            techNames: ['Research', 'ML', 'Education', 'AI'],
            github: "https://link.springer.com/chapter/10.1007/978-3-031-11644-5_46",
            featured: true
        },
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
            title: "Wishlist Price Tracker & Buy-Timing Intelligence",
            description: "Secure wishlist-based price tracking across Amazon, Walmart, Best Buy, and Target with historical trends, percentile-based buy/wait/watch signals, and LLM-powered insight summaries.",
            image: pricetrackerImg,
            techStack: ['⚡', '🗄️', '🔴', '🤖'],
            techNames: ['FastAPI', 'Supabase', 'Redis', 'Groq LLM'],
            github: "https://github.com/salmandshaikh"
        },
        {
            title: "Market Signal Engine & Trade Decision Support",
            description: "Production-grade market signal engine predicting short-horizon stock outperformance using LightGBM on OHLCV data, with walk-forward validation, SHAP-based explainability, and LLM-powered risk summaries.",
            image: stockmarketImg,
            techStack: ['🐍', '📊', '🔍', '🤖'],
            techNames: ['Python', 'LightGBM', 'SHAP', 'Groq LLM'],
            github: "https://github.com/salmandshaikh"
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
            title: "Web Crawler",
            description: "Intelligent web scraping system for automated data extraction and analysis at scale.",
            image: crawlerImg,
            techStack: ['🐍', '🕷️', '📊'],
            techNames: ['Python', 'BeautifulSoup', 'Pandas'],
            github: "https://github.com/salmandshaikh/Web-Crawler"
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
