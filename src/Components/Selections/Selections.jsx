import Select from 'react-select';
import './Selections.scss';
import search from '../../assets/search-normal.svg';

const Selections = () => {
    const countries = [
        { value: 'USA', label: 'USA' },
        { value: 'Norway', label: 'Norway' },
        { value: 'UK', label: 'UK' },
        { value: 'Germany', label: 'Germany' },
    ];

    const religion = [
        {
            value: 'Christianity',
            label: 'Christianity',
        },
        {
            value: 'Islam',
            label: 'Islam',
        },
        {
            value: 'Hinduism',
            label: 'Hinduism',
        },
        {
            value: 'Buddhism',
            label: 'Buddhism',
        },
    ];

    const Year = [
        { value: '793AD', label: '793 AD' },
        { value: '800AD', label: '800 AD' },
        { value: '900AD', label: '900 AD' },
        { value: '1000AD', label: '1000 AD' },
    ];

    const Type = [
        { value: 'Weapon', label: 'Weapon' },
        { value: 'Armor', label: 'Armor' },
        { value: 'Clothing', label: 'Clothing' },
        { value: 'Jewelry', label: 'Jewelry' },
    ];
    const customStyles = {
        control: (provided) => ({
            ...provided,
            background: 'transparent',
            display: 'flex',
            flexWrap: 'nowrap',
            width: '8rem',
        }),
        menu: (provided) => ({
            ...provided,
            background: '#ffffff',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
            padding: '1rem',
            width: '12rem',
            borderRadius: '1rem',
            color: '#000000',
        }),
        option: (provided) => ({
            ...provided,
            color: 'grey',
            marginTop: '0.5rem',
            fontsize: '2rem',
        }),
    };

    return (
        <div className="search-section">
            <div className="category">
                <p>Location</p>
                <Select
                    options={countries}
                    unstyled
                    styles={customStyles}
                    placeholder="Select country"
                />
            </div>
            <div className="category">
                <p>Religion</p>
                <Select
                    options={religion}
                    unstyled
                    styles={customStyles}
                    placeholder="Select Religion"
                />
            </div>
            <div className="category">
                <p>Year</p>
                <Select
                    options={Year}
                    unstyled
                    styles={customStyles}
                    placeholder="Select Year"
                />
            </div>
            <div className="category">
                <p>Type</p>
                <Select
                    options={Type}
                    unstyled
                    styles={customStyles}
                    placeholder="Select type"
                />
            </div>

            <div class="button">
                <img src={search} />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Selections;
