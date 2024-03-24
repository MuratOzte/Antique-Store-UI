import './Hero.scss';
import HeroTexts from './HeroTexts';
import HeroInfo from './HeroInfo';
const Hero = () => {
    return (
        <div class="hero-section">
            <HeroTexts />
            <HeroInfo />
        </div>
    );
};

export default Hero;
