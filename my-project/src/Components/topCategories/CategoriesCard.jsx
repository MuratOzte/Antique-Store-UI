import './TopCategories.scss';

const CategorieCard = ({ cardName, badge, title, dealer, img }) => {
    return (
        <div class={cardName}>
            <div class="badge">{badge}</div>
            <p class="category-title">{title}</p>
            <p class="category-dealer">{dealer}</p>
            <img src={img} />
        </div>
    );
};

export default CategorieCard;
