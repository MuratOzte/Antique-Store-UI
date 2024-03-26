import './RecentlyAdded.scss'

const RecentlyAddedHeader = () => {
    return (
        <div className="recently-added-header">
            <h1 className="recently-added-text">Recently Added</h1>
            <div className="recently-added-buttons">
                <button className="recently-prev-button">&#x2190;</button>
                <button className="recently-next-button">&#x2192;</button>
            </div>
        </div>
    );
};

export default RecentlyAddedHeader;
