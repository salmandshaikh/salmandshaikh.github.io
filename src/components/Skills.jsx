import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skills = [
        "Machine Learning", "Deep Learning", "NLP", "Time Series", "LLMs",
        "TensorFlow", "PyTorch", "Scikit-learn", "AWS", "GCP", "Azure",
        "Apache Spark", "Kafka", "Airflow", "FastAPI", "Kubernetes", "MLOps"
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
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className="skill-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
