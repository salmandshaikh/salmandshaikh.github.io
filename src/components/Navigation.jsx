import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
    const navItems = ['About', 'Resume', 'Portfolio', 'Contact'];

    return (
        <nav className="navigation glass">
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item} className="nav-item">
                        <motion.button
                            className={`nav-link ${activeSection === item ? 'active' : ''}`}
                            onClick={() => setActiveSection(item)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </motion.button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
