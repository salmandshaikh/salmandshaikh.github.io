import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
    const education = [
        {
            institution: 'Northeastern University',
            period: '2023 — 2025',
            description: 'Master of Science in Information Systems, Specializing in Data Science. Focused on machine learning, natural language processing, time series forecasting, and cloud deployment. Applied real-world AI solutions through academic and project-based learning.'
        }
    ];

    const experience = [
        {
            title: 'Data Scientist',
            company: 'Goldman Sachs Group',
            period: 'Jan 2025 — Present',
            description: 'Developed end-to-end ML pipelines using Python and XGBoost, improving prediction accuracy by 10%. Built a Generative AI-powered financial chatbot with LLaMA 2.0, GPT-3.5, and RAG for real-time insights. Created Power BI dashboards integrated with AWS Redshift for KPI tracking. Delivered scalable AI solutions across the full pipeline, including deep learning, GAN-based data augmentation, and cloud deployment.'
        },
        {
            title: 'Data Scientist',
            company: 'Zensar Technologies',
            period: 'Aug 2022 — July 2023',
            description: 'Built scalable AI tools using Python, SQL, and GCP, improving data quality by 90% and cutting deployment time by 25%. Developed ML models with Spark and GANs for anomaly detection, synthetic data generation, and automation, enhancing model accuracy and reliability.'
        },
        {
            title: 'Data Science Consultant',
            company: 'Zensar Technologies',
            period: 'Aug 2021 — Jul 2022',
            description: 'Deployed ML models using Scikit-learn and transformers, achieving 92% churn prediction accuracy. Enhanced insights with Power BI dashboards and Python-SQL pipelines. Applied GANs, NLP, and deep learning (CNNs/RNNs) to tackle class imbalance, improve pattern recognition, and support enterprise AI solutions.'
        }
    ];

    const skills = [
        'Language and Tools: Python, R, SQL, Spark, Vertex AI, Generative AI',
        'IDEs: Visual Studio Code, Jupyter Notebook, PyCharm',
        'ML Algorithms: Linear Regression, Logistic Regression, Decision Trees, Random Forests, XGBoost, SVM, K-Means, Naive Bayes, PCA',
        'Deep Learning: CNN, RNN, LSTM, Transformers (BERT, GPT, T5, LLAMA), Hugging Face, Stable Diffusion, Generative AI (GenAI), OpenCV, LangChain',
        'Packages: NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Keras, Seaborn, Matplotlib, Plotly, SciPy, MLflow, NLTK, spaCy',
        'Cloud Technology: AWS (EC2, S3, Lambda, SageMaker, EMR, DynamoDB), GCP (BigQuery, Vertex AI)',
        'Big Data & Data Engineering: Apache Spark, Databricks, Snowflake, Airflow',
        'MLOps & Model Deployment: Docker, Kubernetes, CI/CD Pipelines, RESTful APIs',
        'Visualization Tools: Tableau, Power BI, Matplotlib, Seaborn',
        'Database: PostgreSQL, MySQL, SQL Server, MongoDB, Cassandra, SPSS'
    ];

    return (
        <section className="resume section">
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
                    Resume
                </motion.h2>

                <div className="resume-section">
                    <h3 className="resume-section-title">
                        <span className="icon">🎓</span>
                        Education
                    </h3>
                    <div className="timeline">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item glass"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="timeline-title">{item.institution}</h4>
                                <span className="timeline-period">{item.period}</span>
                                <p className="timeline-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="resume-section">
                    <h3 className="resume-section-title">
                        <span className="icon">💼</span>
                        Experience
                    </h3>
                    <div className="timeline">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item glass"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="timeline-title">{item.title} – {item.company}</h4>
                                <span className="timeline-period">{item.period}</span>
                                <p className="timeline-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="resume-section">
                    <h3 className="resume-section-title">
                        <span className="icon">🛠️</span>
                        My Skills
                    </h3>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-item glass"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <p>{skill}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
