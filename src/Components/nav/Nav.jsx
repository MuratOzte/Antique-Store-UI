import './Nav.scss';

const Nav = ({ setIsMenuOpen, isMenuOpen }) => {
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <a>
                Siboria<span>.</span>
            </a>
            <div className="menu" onClick={handleMenu}>
                <span className={`line1 ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`line2 ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`line3 ${isMenuOpen ? 'active' : ''}`}></span>
            </div>
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
            <button>Our Collections</button>
        </nav>
    );
};

export default Nav;
