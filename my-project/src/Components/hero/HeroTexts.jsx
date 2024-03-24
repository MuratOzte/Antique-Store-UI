import './Hero.scss';
import PlayButton from '../../assets/play-button.svg';

const HeroTexts = () => {
    return (
        <div className="hero-section-texts">
            <h1 className="primary-text">World&rsquo;s Biggest</h1>
            <h1 className="secondary-text">Antique Collection</h1>
            <p className="gray-text">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distruts may instantly was household
                applauded incommode.
            </p>
            <div className="hero-footer">
                <button>Discover Now</button>
                <div className="video-button">
                    <div className="rounded-button">
                        <img src={PlayButton} />
                    </div>
                    <p className="watch-video-text">Watch Video</p>
                </div>
            </div>
        </div>
    );
};

export default HeroTexts;
