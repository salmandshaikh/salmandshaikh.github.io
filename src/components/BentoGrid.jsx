import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BentoGrid.css';

const BentoGrid = () => {
    const [currentSkill, setCurrentSkill] = useState(0);
    const [emailCopied, setEmailCopied] = useState(false);

    const skills = [
        { name: 'Python', icon: '🐍' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'Machine Learning', icon: '🤖' },
        { name: 'NLP', icon: '💬' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Snowflake', icon: '❄️' },
        { name: 'Power BI', icon: '📊' },
        { name: 'Docker', icon: '🐳' },
        { name: 'LLMs', icon: '✨' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [skills.length]);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('salmandshaikh1907@gmail.com');
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <section className="bento-section" id="about">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>

            <div className="bento-grid">
                {/* Personal Statement - Large Box */}
                <motion.div
                    className="bento-card bento-large glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bento-glow"></div>
                    <h3 className="bento-title">Personal Statement</h3>
                    <p className="bento-text">
                        I'm a Data Scientist with 4+ years of experience building intelligent
                        solutions that drive real impact. My expertise spans Machine Learning,
                        NLP, and Generative AI—from developing fraud detection models that saved
                        millions to building LLM-powered chatbots that transformed customer experiences.
                    </p>
                    <p className="bento-text">
                        I believe the best AI solutions come from understanding both the technology
                        and the people it serves. That's why I focus on building systems that are
                        not just accurate, but explainable, scalable, and impactful.
                    </p>
                </motion.div>

                {/* Digital DNA - Skills Cycling */}
                <motion.div
                    className="bento-card bento-medium glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="bento-glow"></div>
                    <h3 className="bento-title">Digital DNA</h3>
                    <div className="skill-display">
                        <motion.div
                            key={currentSkill}
                            className="skill-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="skill-icon">{skills[currentSkill].icon}</span>
                            <span className="skill-name">{skills[currentSkill].name}</span>
                        </motion.div>
                    </div>
                    <div className="skill-dots">
                        {skills.map((_, index) => (
                            <div
                                key={index}
                                className={`skill-dot ${index === currentSkill ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Life Lately */}
                <motion.div
                    className="bento-card bento-small glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bento-glow"></div>
                    <h3 className="bento-title">Life Lately</h3>
                    <p className="bento-text life-text">
                        📍 San Jose, CA<br />
                        🎓 MS @ Northeastern<br />
                        💼 Data Scientist @ Goldman Sachs<br />
                        🔬 Building AI that matters
                    </p>
                </motion.div>

                {/* Copy Email Button */}
                <motion.div
                    className="bento-card bento-small bento-interactive glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="bento-glow"></div>
                    <motion.div
                        className="email-content"
                        animate={{ scale: emailCopied ? [1, 1.1, 1] : 1 }}
                    >
                        <span className="email-icon">{emailCopied ? '✅' : '📧'}</span>
                        <span className="email-text">
                            {emailCopied ? 'Email Copied!' : 'Copy My Email'}
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
