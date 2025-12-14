import { motion } from 'framer-motion';
import './Sidebar.css';
import profilePhoto from '../assets/profile-photo.jpg';
import emailIcon from '../assets/icon-email.svg';
import phoneIcon from '../assets/icon-phone.svg';
import locationIcon from '../assets/icon-location.svg';

const Sidebar = () => {
    const contactInfo = [
        {
            icon: emailIcon,
            title: 'Email',
            value: 'salmandshaikh1907@gmail.com',
            link: 'mailto:salmandshaikh1907@gmail.com'
        },
        {
            icon: phoneIcon,
            title: 'Phone',
            value: '+1 (857) 405-9046',
            link: 'tel:+18574059046'
        },
        {
            icon: locationIcon,
            title: 'Location',
            value: 'San Jose, California, USA',
            link: '#'
        }
    ];

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
        }
    ];

    return (
        <motion.aside
            className="sidebar glass"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="sidebar-content">
                <motion.div
                    className="avatar-box"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="avatar-glow" />
                    <img src={profilePhoto} alt="Salman Shaikh" className="avatar-image" />
                </motion.div>

                <motion.div
                    className="info-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h1 className="name">Salman Shaikh</h1>
                    <p className="title">Data Scientist</p>
                </motion.div>

                <div className="separator" />

                <div className="contacts-list">
                    {contactInfo.map((contact, index) => (
                        <motion.div
                            key={contact.title}
                            className="contact-item"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                        >
                            <div className="contact-icon-wrapper">
                                <img src={contact.icon} alt={contact.title} className="contact-icon" />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">{contact.title}</p>
                                <a href={contact.link} className="contact-link">
                                    {contact.value}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="separator" />

                <div className="social-list">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="social-icon">{social.icon}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
