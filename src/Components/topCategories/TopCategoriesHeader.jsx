import './TopCategories.scss';

const TopCategoriesHeader = () => {
    return (
        <div className="top-categories-header">
            <div className="top-categories-texts">
                <h1>Top Categories</h1>
                <p>
                    Party we years to order allow asked of. We so opinion
                    friends me message as delight.
                </p>
            </div>
            <div className="top-categories-buttons">
                <button className="categories-prev-button">&#x2190;</button>
                <button className="categories-next-button">&#x2192;</button>
            </div>
        </div>
    );
};

export default TopCategoriesHeader;
