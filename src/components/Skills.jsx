import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "AI & Agents",
            size: "large",
            skills: ["MCP Tools", "AI Orchestration", "Building Agents", "Agentic AI", "Transformers", "LLMs", "RAG"]
        },
        {
            title: "Data Science",
            size: "medium",
            skills: ["Machine Learning", "Deep Learning", "NLP", "Time Series", "Statistical Modeling", "Feature Engineering"]
        },
        {
            title: "ML Frameworks",
            size: "medium",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LightGBM", "XGBoost", "Hugging Face"]
        },
        {
            title: "Cloud & Infrastructure",
            size: "small",
            skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]
        },
        {
            title: "Data Engineering",
            size: "small",
            skills: ["Apache Spark", "Kafka", "Airflow", "ETL Pipelines"]
        },
        {
            title: "Backend & APIs",
            size: "small",
            skills: ["FastAPI", "Python", "SQL", "Redis", "Supabase"]
        },
        {
            title: "MLOps & Tools",
            size: "small",
            skills: ["MLflow", "Git", "CI/CD", "Power BI", "Streamlit"]
        }
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>
                
                <div className="bento-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={`bento-card bento-${category.size}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* Water Animation Layer */}
                            <div className="water-container">
                                <div className="water-wave wave-1"></div>
                                <div className="water-wave wave-2"></div>
                                <div className="water-wave wave-3"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="bento-content">
                                <h3 className="bento-title">{category.title}</h3>
                                <div className="skills-tags">
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="skill-tag"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="bento-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
