import './TopCategories.scss';

const CategorieCard = ({ cardName, badge, title, dealer, img }) => {
    title == 'statues' ? console.log(title) : '';
    return (
        <div className={cardName}>
            <div className="badge">{badge}</div>
            <p className="category-title">{title}</p>
            <p className="category-dealer">{dealer}</p>
            <img
                src={img}
                className={`${title == 'Statues' ? 'statue' : ''}`}
            />
        </div>
    );
};

export default CategorieCard;
