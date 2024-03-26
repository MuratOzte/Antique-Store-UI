import { motion } from 'framer-motion';

const MobileLinks = () => {
    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="mobile-links"
        >
            <ul>
                <li>
                    <a className="is-active" href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">Collections</a>
                </li>
                <li>
                    <a href="#">How We Collect</a>
                </li>
                <li>
                    <a href="#">Sell An Antique</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
        </motion.div>
    );
};

export default MobileLinks;
