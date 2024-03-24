import './RecentlyAdded.scss';
import $ from 'jquery';

const RecentItem = () => {
    const recentlyAddeds = [
        {
            image: 'assets/recently-added/chair.svg',
            title: 'Data1',
            description: 'Year 1992 | Weapons',
            price: '$ 895.50',
            bids: '12 bids so far',
            date: 'Bidding closes in 12 Days',
        },
        {
            image: 'assets/recently-added/table.svg',
            title: 'Data2',
            description: 'Year 1078 | Weapons',
            price: '$ 759',
            bids: '14 bids so far',
            date: 'Bidding closes in 12 Days',
        },
        {
            image: 'assets/recently-added/skull.svg',
            title: 'Data3',
            description: 'Year 1256 | Weapons',
            price: '$ 895.50',
            bids: '16 bids so far',
            date: 'Bidding closes in 12 Days',
        },
    ];

    $(document).ready(function () {
        for (let i = 0; i < data1.length; i++) {
            const item = data1[i];
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    $(`#${key}`).text(item[key]);
                }
            }
        }
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
    );
};

export default RecentItem;
