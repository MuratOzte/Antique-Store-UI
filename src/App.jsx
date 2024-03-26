import Nav from './Components/nav/Nav';
import MobileLinks from './Components/nav/MobileLinks';
import Hero from './Components/hero/Hero';
import Selections from './Components/Selections/Selections';
import RecentlyAdded from './Components/RecentlyAdded/RecentlyAdded';
import TopCategories from './Components/topCategories/TopCategories';
import FeedBack from './Components/feedback/Feedback';
import Subscribe from './Components/subscribe/Subscribe';
import Footer from './Components/footer/Footer';

import { useState } from 'react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div style={containerStyle}>
            <div style={containerItem}>
                <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                {isMenuOpen && <MobileLinks />}
                <Hero />
            </div>
            <div
                style={{
                    ...containerItem,
                    paddingTop: '2px',
                }}
            >
                <Selections />
                <RecentlyAdded />
            </div>
            <div style={containerItem}>
                <TopCategories />
            </div>
            <div
                style={{
                    ...containerItem,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FeedBack />
            </div>
            <div
                style={{
                    ...containerItem,
                    paddingTop: '16px',
                }}
            >
                <Subscribe />
                <Footer />
            </div>
        </div>
    );
}

const containerStyle = {
    scrollSnapType: 'y mandatory',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
};

const containerItem = {
    scrollSnapAlign: 'center',
    scrollSnapStop: 'always',
    height: '100vh',
    width: '100%',
};

export default App;
