import Nav from './Components/nav/Nav';
import MobileLinks from './Components/nav/MobileLinks';
import Hero from './Components/hero/Hero';
import Selections from './Components/Selections/Selections';
import RecentlyAdded from './Components/RecentlyAdded/RecentlyAdded';
import TopCategories from './Components/topCategories/TopCategories';
import FeedBack from './Components/feedback/Feedback';
import Subscribe from './Components/subscribe/Subscribe';
import Footer from './Components/footer/Footer';

function App() {
    return (
        <div
            style={{
                scrollSnapType: 'y mandatory',
                width: '100%',
                height: '100vh',
                overflowY: 'scroll',
            }}
        >
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <Nav />
                <MobileLinks />
                <Hero />
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                    paddingTop: '2px',
                }}
            >
                <Selections />
                <RecentlyAdded />
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <TopCategories />
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FeedBack />
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
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
