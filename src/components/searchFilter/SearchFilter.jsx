import { useState } from "react"
import Select from "react-select";

import './searchFilter.scss';

const SearchFilter = ({onFilterChange}) => {

    const [filters, setFilters] = useState({
        age: '',
        size: '',
        gender: '',
        vaccine: false
    });

    const handleChange = (key, value) => {
        const updateFilters = {...filters, [key]: value};
        setFilters(updateFilters);
        onFilterChange(updateFilters)
    }

    const ageSelect = [
        {label: 'Выберите возраст', value:''},
        {label: 'До 1 года', value:'0-1'},
        {label: '1 - 3 года', value:'1-3'},
        {label: '4 - 6 лет', value:'4-6'},
        {label: 'От 7 лет', value:'7+'}
    ]

    const sizeSelect = [
        {label: 'Выберите размер', value: ''},
        {label: 'До 15 кг (маленький)', value: '0-15'},
        {label: '15 - 25кг (Средний)', value: '15-25'},
        {label: 'От 25кг (Большой)', value: '25'}
    ]


    return (
        <div className="filter">
            <label>
                Врзраст:
                <Select 
                    options={ageSelect}
                    value={ageSelect.find(option => option.value === filters.age)}
                    onChange={(option) => handleChange('age', option.value)}
                />
                {/* <select value={filters.age} onChange={(e) => handleChange('age', e.target.value)}>
                    <option value=''>Выберите возраст</option>
                    <option value='0-1'> До 1 года</option>
                    <option value='1-3'> 1 - 3 года</option>
                    <option value='4-6'> 4 - 6 лет</option>
                    <option value='7+'> От 7 лет</option>
                </select> */}
            </label>
            <label>
                Размер:
                <Select 
                    options={sizeSelect}
                    value={sizeSelect.find(option => option.value === filters.size)}
                    onChange={(option => handleChange('size', option.value))}
                />
                {/* <select value={filters.size} onChange={(e) => handleChange('size', e.target.value)}>
                    <option value=''>Выберите размер</option>
                    <option value='0-15'> До 15 кг (маленький)</option>
                    <option value='15-25'> 15 - 25кг (Средний)</option>
                    <option value='25'> От 25кг (Большой)</option>
                </select> */}
            </label>
            <label>
                Пол:
                <select value={filters.gender} onChange={(e) => handleChange('gender', e.target.value)}>
                    <option value=''>Выберите пол</option>
                    <option value='male'> Мальчик</option>
                    <option value='female'> Девочка</option>
                </select>
            </label>
            <label>
                привитые
                <input type="checkbox" checked={filters.vaccine} onChange={(e) => handleChange('vaccine', e.target.checked)}/>
            </label>
        </div>
    )
}

export default SearchFilter;