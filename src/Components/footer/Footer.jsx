import './Footer.scss';

import facebook from '../../assets/social/facebook.svg';
import instagram from '../../assets/social/instagram.svg';
import twitter from '../../assets/social/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="links">
                <div className="resources">
                    <h1>Resources</h1>
                    <ul>
                        <li>Download</li>
                        <li>Help Center</li>
                        <li>Guide Book</li>
                        <li>App Directory</li>
                    </ul>
                </div>
                <div className="seboria">
                    <h1>Seboria</h1>
                    <ul>
                        <li>Why seboria</li>
                        <li>Our Collection Process</li>
                        <li>Customer Stories</li>
                        <li>Instagram Post</li>
                    </ul>
                </div>
                <div className="Company">
                    <h1>Company</h1>
                    <ul>
                        <li>Antiques</li>
                        <li>About Seboria</li>
                        <li>Succes</li>
                        <li>Information</li>
                    </ul>
                </div>
                <div className="get-in-touch">
                    <h1>Get In Touch</h1>
                    <p>Feel free to get in touch with us via email</p>
                    <h4>shakir260@gmail.com</h4>
                </div>
            </div>
            <div className="end-section">
                <div className="logo">
                    <h1>
                        Siboria<span>.</span>
                    </h1>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>Home</li>
                        <li>Collection</li>
                        <li>How We Collect</li>
                        <li>Sell An Antique</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="social-media">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
