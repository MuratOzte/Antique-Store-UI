import FeedBack from './Components/feedback/Feedback';
import Footer from './Components/footer/Footer';
import Hero from './Components/hero/Hero';
import MobileLinks from './Components/nav/MobileLinks';
import Nav from './Components/nav/Nav';
import RecentlyAdded from './Components/RecentlyAdded/RecentlyAdded';
import Selections from './Components/Selections/Selections';
import Subscribe from './Components/subscribe/Subscribe';
import TopCategories from './Components/topCategories/TopCategories';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import './App.scss';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="container">
            <div className="item">
                <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                <AnimatePresence>
                    {isMenuOpen && <MobileLinks />}
                </AnimatePresence>
                <Hero />
            </div>
            <div
                className="item"
                style={{
                    paddingTop: '2px',
                }}
            >
                <Selections />
                <RecentlyAdded />
            </div>
            <div className="item">
                <TopCategories />
            </div>
            <div
                className="item"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FeedBack />
            </div>
            <div
                className="item"
                style={{
                    paddingTop: '16px',
                }}
            >
                <Subscribe />
                <Footer />
            </div>
        </div>
    );
}

export default App;
