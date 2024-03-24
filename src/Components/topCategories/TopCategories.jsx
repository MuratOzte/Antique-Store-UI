import './TopCategories.scss';
import TopCategoriesHeader from './TopCategoriesHeader';
import CategoriesCard from './CategoriesCard';

import chair from '../../assets/categories/chair.svg';
import skull from '../../assets/categories/skull.svg';
import table from '../../assets/categories/table.svg';
import statue from '../../assets/categories/statue.svg';

const categories = [
    {
        cardName: 'card a',
        badge: 124,
        title: 'Weapons',
        dealer: 'Worefall',
        image: skull,
    },
    {
        cardName: 'card b',
        badge: 124,
        title: 'Watches',
        dealer: 'Worefall',
        image: chair,
    },
    {
        cardName: 'card c',
        badge: 124,
        title: 'Skuls',
        dealer: 'Worefall',
        image: skull,
    },
    {
        cardName: 'card d',
        badge: 124,
        title: 'Statues',
        dealer: 'Worefall',
        image: statue,
    },
    {
        cardName: 'card e',
        badge: 124,
        title: 'Keep',
        dealer: 'Worefall',
        image: table,
    },
    {
        cardName: 'card f',
        badge: 124,
        title: 'Furniture',
        dealer: 'Worefall',
        image: chair,
    },
];

const TopCategories = () => {
    return (
        <div class="top-categories">
            <TopCategoriesHeader />
            <div class="top-categories-cards">
                {categories.map((category, index) => (
                    <CategoriesCard
                        key={index}
                        cardName={category.cardName}
                        badge={category.badge}
                        title={category.title}
                        dealer={category.dealer}
                        img={category.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
