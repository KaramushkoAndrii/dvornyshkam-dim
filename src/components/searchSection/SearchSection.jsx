
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import RandomAnimalCard from '../RandomAnimalCard/RandomAnimalCard';
import Animals from '../../data/animalsDB';
import Button from '../button/Button';


import './searchSection.scss';


const SearchSection = () => {

    const { t } = useTranslation();

    const [currentAnimal, setCurrentAnimal] = useState(getRandomAnimal())

    function getRandomAnimal() {
        const randomAnimalIndex = Math.floor(Math.random() * Animals.length);
        
        return Animals[randomAnimalIndex]
    }

    const animalRerol = () => {
        setCurrentAnimal(getRandomAnimal())
    }

    return (
        <section className='search'>
            <h2 className='search__title'>{t('search.title')}</h2>

            <RandomAnimalCard animal={currentAnimal} />

            <div className='search__button-group'>
                <Button text={t('buttons.rerol')} onClick={animalRerol}/>
                <Button text={t('buttons.about')}></Button>
            </div>
        </section>
    )
}

export default SearchSection;