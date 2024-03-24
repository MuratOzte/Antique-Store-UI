import vase from "../../assets/vase.svg";
import cup from "../../assets/cup.svg";
import building from "../../assets/building.svg";
import share from "../../assets/share.svg";

const HeroInfo = () => {
    return (
        <div className="header-info">
            <img src={vase} alt="main-pic" />
            <div className="infos">
                <div className="info">
                    <img src={share} alt="share" />
                    <div className="specs">
                        <p className="title" id="year"></p>
                        <p className="description">Year</p>
                    </div>
                </div>
                <div className="info">
                    <img src={cup} alt="cup" />
                    <div className="specs">
                        <p className="title" id="bids"></p>
                        <p className="description">Birds so far</p>
                    </div>
                </div>
                <div className="info">
                    <img src={building} alt="building" />
                    <div className="specs">
                        <p className="title" id="origin"></p>
                        <p className="description">Origin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroInfo;
