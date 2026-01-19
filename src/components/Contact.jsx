import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <motion.div
                className="contact-content text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="contact-title gradient-text">Let's transform data into discoveries</h2>
                <div className="contact-action">
                    <a href="mailto:salman.shaikh@example.com" className="contact-btn moving-border">
                        <span className="cta-text">Let's get in touch</span>
                    </a>
                </div>

                <div className="contact-footer glass">
                    <div className="footer-links">
                        <a href="https://github.com/salmandshaikh" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/salmanshaikh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:salman.shaikh@example.com">Email</a>
                    </div>
                    <p className="copyright">© 2025 Salman Shaikh. All rights reserved.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
