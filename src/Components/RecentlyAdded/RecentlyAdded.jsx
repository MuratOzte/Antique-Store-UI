import './RecentlyAdded.scss';
import RecentlyAddedHeader from './RecentlyAddedHeader';
import chair from '../../assets/recently-added/chair.svg';
import skull from '../../assets/recently-added/skull.svg';
import table from '../../assets/recently-added/table.svg';

import $ from 'jquery';

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

    return (
        <div class="recently-added-section">
            <RecentlyAddedHeader />
            <div class="recent-items">
                <div class="recent-item">
                    <div class="image-container">
                        <img id="image1" src="" />
                    </div>

                    <div class="datas">
                        <h3 id="title1"></h3>
                        <p id="description1"></p>
                    </div>
                    <div class="price-action">
                        <h1 id="price1"></h1>
                        <button>View Details</button>
                    </div>
                    <div class="recent-footer">
                        <h6 id="bids1"></h6>
                        <h6 id="date1" class="bidding-time"></h6>
                    </div>
                </div>
                <div class="recent-item">
                    <div class="image-container">
                        <img id="image2" src="" />
                    </div>

                    <div class="datas">
                        <h3 id="title2"></h3>
                        <p id="description2"></p>
                    </div>
                    <div class="price-action">
                        <h1 id="price2"></h1>
                        <button>View Details</button>
                    </div>
                    <div class="recent-footer">
                        <h6 id="bids2"></h6>
                        <h6 id="date2" class="bidding-time"></h6>
                    </div>
                </div>
                <div class="recent-item">
                    <div class="image-container">
                        <img id="image3" src="" />
                    </div>

                    <div class="datas">
                        <h3 id="title3"></h3>
                        <p id="description3"></p>
                    </div>
                    <div class="price-action">
                        <h1 id="price3"></h1>
                        <button>View Details</button>
                    </div>
                    <div class="recent-footer">
                        <h6 id="bids3"></h6>
                        <h6 id="date3" class="bidding-time"></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;
