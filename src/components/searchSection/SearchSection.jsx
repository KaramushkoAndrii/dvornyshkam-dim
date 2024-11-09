

import { useTranslation } from 'react-i18next';


import './searchSection.scss';

const SearchSection = () => {

    const { t } = useTranslation();

    return (
        <section className='search'>
            <h2 className='search__title'>{t('search.title')}</h2>
        </section>
    )
}

export default SearchSection;