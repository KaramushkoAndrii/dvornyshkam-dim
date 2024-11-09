
import RandomAnimalCard from '../personalCard/RandomAnimalCard';
import Animals from '../../data/animalsDB';

import { useTranslation } from 'react-i18next';


import './searchSection.scss';

const SearchSection = () => {

    const { t } = useTranslation();

    return (
        <section className='search'>
            <h2 className='search__title'>{t('search.title')}</h2>

            <RandomAnimalCard animal={Animals[0]} />
        </section>
    )
}

export default SearchSection;