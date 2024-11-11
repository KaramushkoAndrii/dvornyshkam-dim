
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import RandomAnimalCard from '../RandomAnimalCard/RandomAnimalCard';
import Animals from '../../data/animalsDB';
import Button from '../button/Button';


import './searchSection.scss';


const SearchSection = () => {

    const { t } = useTranslation();

    const [currentAnimal, setCurrentAnimal] = useState(getRandomAnimal());
    const [isAnimating, setIsAnimating] = useState(false);

    function getRandomAnimal() {
        const randomAnimalIndex = Math.floor(Math.random() * Animals.length);
        
        return Animals[randomAnimalIndex]
    }

    const animalRerol = () => {
        setIsAnimating(true);
        // setCurrentAnimal(getRandomAnimal())
    }

    useEffect(() => {
        if(isAnimating) {
            const timer = setTimeout(() => {
                setCurrentAnimal(getRandomAnimal());
                setIsAnimating(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isAnimating])

    return (
        <section className='search'>
            <h2 className='search__title'>{t('search.title')}</h2>

            <div className={`card-container ${isAnimating ? 'rotate' : ''}`}>
                <RandomAnimalCard animal={currentAnimal} />
            </div>

            <div className='search__button-group'>
                <Button text={t('buttons.rerol')} onClick={animalRerol} disabled={isAnimating}/>
                <Button text={t('buttons.about')}></Button>
            </div>
        </section>
    )
}

export default SearchSection;