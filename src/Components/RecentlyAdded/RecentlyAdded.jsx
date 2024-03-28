import './RecentlyAdded.scss';
import RecentlyAddedHeader from './RecentlyAddedHeader';
import chair from '../../assets/recently-added/chair.svg';
import skull from '../../assets/recently-added/skull.svg';
import table from '../../assets/recently-added/table.svg';

import $ from 'jquery';
import { useRef } from 'react';

const RecentlyAdded = () => {
    const recentlyAddeds = [
        {
            image: chair,
            title: 'Data1',
            description: 'Year 1992 | Weapons',
            price: '$ 895.50',
            bids: '12 bids so far',
            date: 'Bidding closes in 12 Days',
        },
        {
            image: table,
            title: 'Data2',
            description: 'Year 1078 | Weapons',
            price: '$ 759',
            bids: '14 bids so far',
            date: 'Bidding closes in 12 Days',
        },
        {
            image: skull,
            title: 'Data3',
            description: 'Year 1256 | Weapons',
            price: '$ 895.50',
            bids: '16 bids so far',
            date: 'Bidding closes in 12 Days',
        },
    ];

    $(document).ready(function () {
        for (let i = 0; i < recentlyAddeds.length; i++) {
            const item = recentlyAddeds[i];
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    if (key === 'image') {
                        $(`#${key}${i + 1}`).attr('src', item[key]);
                        continue;
                    }
                    $(`#${key}${i + 1}`).text(item[key]);
                }
            }
        }
    });

    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const recentItems = useRef(null);

    const buttonClickHandler = (direction) => {
        const container = recentItems.current;
        const scrollAmount = item1.current.offsetWidth + 20;
        const scrollDuration = 500;

        const startTime = performance.now();
        const startScrollLeft = container.scrollLeft;
        const endTime = startTime + scrollDuration;

        const scrollTarget =
            direction === 'left'
                ? Math.max(startScrollLeft - scrollAmount, 0)
                : startScrollLeft + scrollAmount;

        function scrollStep(timestamp) {
            const currentTime = Math.min(timestamp, endTime);
            const elapsed = currentTime - startTime;
            const scrollRatio = elapsed / scrollDuration;
            container.scrollLeft =
                startScrollLeft +
                scrollRatio * (scrollTarget - startScrollLeft);

            if (currentTime < endTime) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    };

    const prevButtonHandler = () => {
        buttonClickHandler('left');
    };
    const nextButtonHandler = () => {
        buttonClickHandler('right');
    };

    return (
        <div className="recently-added-section">
            <RecentlyAddedHeader
                prevButtonHandler={prevButtonHandler}
                nextButtonHandler={nextButtonHandler}
            />
            <div className="recent-items" ref={recentItems}>
                <div className="recent-item" ref={item1}>
                    <div className="image-container">
                        <img id="image1" src="" />
                    </div>

                    <div className="datas">
                        <h3 id="title1"></h3>
                        <p id="description1"></p>
                    </div>
                    <div className="price-action">
                        <h1 id="price1"></h1>
                        <button>View Details</button>
                    </div>
                    <div className="recent-footer">
                        <h6 id="bids1"></h6>
                        <h6 id="date1" className="bidding-time"></h6>
                    </div>
                </div>
                <div className="recent-item" ref={item2}>
                    <div className="image-container">
                        <img id="image2" src="" />
                    </div>

                    <div className="datas">
                        <h3 id="title2"></h3>
                        <p id="description2"></p>
                    </div>
                    <div className="price-action">
                        <h1 id="price2"></h1>
                        <button>View Details</button>
                    </div>
                    <div className="recent-footer">
                        <h6 id="bids2"></h6>
                        <h6 id="date2" className="bidding-time"></h6>
                    </div>
                </div>
                <div className="recent-item" ref={item3}>
                    <div className="image-container">
                        <img id="image3" src="" />
                    </div>

                    <div className="datas">
                        <h3 id="title3"></h3>
                        <p id="description3"></p>
                    </div>
                    <div className="price-action">
                        <h1 id="price3"></h1>
                        <button>View Details</button>
                    </div>
                    <div className="recent-footer">
                        <h6 id="bids3"></h6>
                        <h6 id="date3" className="bidding-time"></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;
