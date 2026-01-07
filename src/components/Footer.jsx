import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/salman-shaikh-2011501b5/',
            icon: '💼'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/salmandshaikh',
            icon: '💻'
        },
        {
            name: 'Email',
            url: 'mailto:salmandshaikh1907@gmail.com',
            icon: '📧'
        }
    ];

    return (
        <footer className="footer-section" id="contact">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="footer-title">Ready to create something amazing?</h2>
                <p className="footer-subtitle">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions.
                </p>

                <motion.a
                    href="mailto:salmandshaikh1907@gmail.com"
                    className="footer-cta moving-border"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="cta-text">Let's Get in Touch</span>
                </motion.a>

                <div className="footer-socials">
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn glass"
                            whileHover={{ y: -5, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                            title={social.name}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Salman Shaikh. All rights reserved.</p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
