import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can integrate with a backend or email service)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact section">
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
                    Contact
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="contact-info-title">Get in Touch</h3>
                        <p className="contact-info-text">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:salmandshaikh1907@gmail.com">salmandshaikh1907@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <span className="contact-icon">📱</span>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+18574059046">+1 (857) 405-9046</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>San Jose, California, USA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="Your message..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
