const Nav = () => {
    return (
        <nav>
            <a>
                Siboria<span>.</span>
            </a>
            <div class="menu">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
            </div>
            <ul>
                <li>
                    <a class="is-active" href="#">
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
