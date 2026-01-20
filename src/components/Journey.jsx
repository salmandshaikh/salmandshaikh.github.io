import { motion } from 'framer-motion';
import './Journey.css';

const Journey = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Data Scientist',
            organization: 'Goldman Sachs Group',
            period: 'Jan 2025 — Present',
            description: 'Developed end-to-end ML pipelines using Python and XGBoost, improving prediction accuracy by 10%. Built a Generative AI-powered financial chatbot with LLaMA 2.0, GPT-3.5, and RAG for real-time insights. Created Power BI dashboards integrated with AWS Redshift.',
            skills: ['Python', 'XGBoost', 'LLaMA', 'RAG', 'AWS']
        },
        {
            type: 'education',
            title: 'MS in Information Systems',
            organization: 'Northeastern University',
            period: '2023 — 2025',
            description: 'Specializing in Data Science. Focused on machine learning, natural language processing, time series forecasting, and cloud deployment. Applied real-world AI solutions through academic and project-based learning.',
            skills: ['Data Science', 'NLP', 'Cloud Computing']
        },
        {
            type: 'work',
            title: 'Data Scientist',
            organization: 'Zensar Technologies',
            period: 'Aug 2022 — July 2023',
            description: 'Built scalable AI tools using Python, SQL, and GCP, improving data quality by 90% and cutting deployment time by 25%. Developed ML models with Spark and GANs for anomaly detection and synthetic data generation.',
            skills: ['GCP', 'Spark', 'GANs', 'SQL']
        },
        {
            type: 'work',
            title: 'Data Science Consultant',
            organization: 'Zensar Technologies',
            period: 'Aug 2021 — Jul 2022',
            description: 'Deployed ML models using Scikit-learn and transformers, achieving 92% churn prediction accuracy. Enhanced insights with Power BI dashboards and Python-SQL pipelines. Applied GANs and deep learning for pattern recognition.',
            skills: ['Scikit-learn', 'Transformers', 'Power BI']
        }
    ];

    return (
        <section className="journey-section" id="journey">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                My Journey
            </motion.h2>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="timeline-dot">
                            {item.type === 'work' ? '💼' : '🎓'}
                        </div>

                        <div className="timeline-content glass">
                            <span className="timeline-date">{item.period}</span>
                            <h3 className="timeline-role">{item.title}</h3>
                            <h4 className="timeline-org">{item.organization}</h4>
                            <p className="timeline-desc">{item.description}</p>

                            <div className="timeline-skills">
                                {item.skills.map(skill => (
                                    <span key={skill} className="t-skill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Journey;
