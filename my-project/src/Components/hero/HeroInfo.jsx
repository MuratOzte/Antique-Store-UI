const HeroInfo = () => {
    return (
        <div className="header-info">
            <img src="./assets/vase.svg" alt="main-pic" />
            <div className="infos">
                <div className="info">
                    <img src="./assets/share.svg" alt="share" />
                    <div className="specs">
                        <p className="title" id="year"></p>
                        <p className="description">Year</p>
                    </div>
                </div>
                <div className="info">
                    <img src="./assets/cup.svg" alt="cup" />
                    <div className="specs">
                        <p className="title" id="bids"></p>
                        <p className="description">Birds so far</p>
                    </div>
                </div>
                <div className="info">
                    <img src="./assets/building.svg" alt="building" />
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
