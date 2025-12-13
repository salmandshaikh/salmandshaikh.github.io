import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const services = [
        {
            icon: '🤖',
            title: 'Machine Learning & Model Development',
            description: 'Building and deploying scalable machine learning models for classification, forecasting, and anomaly detection using Scikit-learn, XGBoost, TensorFlow, and PyTorch. Specializing in NLP and LLM-based solutions with Hugging Face Transformers.'
        },
        {
            icon: '☁️',
            title: 'MLOps & Cloud Deployment',
            description: 'Automating ML pipelines and production deployments using Docker, Kubernetes, and CI/CD workflows across cloud platforms including AWS SageMaker, GCP Vertex AI, and Azure ML Studio—ensuring reliability and scalability.'
        },
        {
            icon: '📊',
            title: 'Applied Data Science & Analytics',
            description: 'Developing end-to-end data science solutions using statistical modeling, machine learning, and deep learning techniques. Leveraging tools like Scikit-learn, TensorFlow, and PyTorch to solve business problems in forecasting, classification, and customer analytics.'
        },
        {
            icon: '🎯',
            title: 'Model Monitoring & Responsible AI',
            description: 'Developing dashboards to monitor model drift, latency, and accuracy using Power BI and Prometheus. Ensuring fairness, explainability, and compliance with Responsible AI practices.'
        }
    ];

    const skills = [
        { name: 'Fast Learner', icon: '⚡', description: 'Ability to quickly acquire new knowledge and adapt to changing technological environments.' },
        { name: 'Teamwork', icon: '👥', description: 'Collaborate effectively in multidisciplinary projects and communicate clearly with team members.' },
        { name: 'Problem Solving', icon: '🔧', description: 'Creative and efficient in identifying and solving technical problems.' },
        { name: 'Effective Communication', icon: '💬', description: 'Skill to convey ideas clearly and concisely, both technically and non-technically.' }
    ];

    const technologies = [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face',
        'Pandas', 'NumPy', 'Jupyter', 'MySQL', 'Docker', 'Kubernetes', 'Power BI', 'Snowflake'
    ];

    return (
        <section className="about section">
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="section-title"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    About Me
                </motion.h2>

                <div className="about-text">
                    <p>
                        I am a Data Scientist with over 4 years of experience building and deploying machine learning and deep learning solutions across finance, retail, and telecom sectors. My core strengths include natural language processing, time series forecasting, and large language models (LLMs). I've developed models that improved business KPIs by up to 30%, working with tools like TensorFlow, PyTorch, and Scikit-learn, and deploying them across AWS, GCP, and Azure environments.
                    </p>
                    <p>
                        I specialize in scalable ML systems—designing robust data pipelines using Apache Spark, Kafka, and Airflow, and deploying models with FastAPI and Kubernetes. With a strong focus on MLOps, feature engineering, and model optimization, I bring together data science and engineering to deliver production-grade, responsible AI solutions that drive real business impact.
                    </p>
                </div>

                <h3 className="subsection-title">What I'm Doing</h3>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="service-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-content">
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h3 className="subsection-title">Soft Skills</h3>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h4 className="skill-name">{skill.name}</h4>
                            <p className="skill-description">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>

                <h3 className="subsection-title">Tech Experience</h3>
                <div className="tech-list">
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={tech}
                            className="tech-tag"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
