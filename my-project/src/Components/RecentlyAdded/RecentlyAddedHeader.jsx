import './RecentlyAdded.scss'

const RecentlyAddedHeader = () => {
    return (
        <div class="recently-added-header">
            <h1 class="recently-added-text">Recently Added</h1>
            <div class="recently-added-buttons">
                <button class="recently-prev-button">&#x2190;</button>
                <button class="recently-next-button">&#x2192;</button>
            </div>
        </div>
    );
};

export default RecentlyAddedHeader;
