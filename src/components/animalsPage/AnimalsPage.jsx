
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AllAnimalsList from '../allAnimalsList/AllAnimalsList';
import Button from '../../components/button/Button';

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import './animalsPage.scss';

const AnimalsPage = ({title, data = [], animal, isOpen}) => {

    const { t } = useTranslation();

    const [visibleCards, setVisibleCards] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const loadMoreAnimals = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setVisibleCards((prev) => prev + 4);
        setIsLoading(false);
    }

    const handleAnimalSelect = (animal) => {
        setSelectedAnimal(animal)
    }

    const handleCloseAside = () => {
        setSelectedAnimal(null)
    }

    return (
        <>
            <h2>{t(`${title}`)}</h2>
            <section className="animalPage__content">
                <AllAnimalsList 
                    list={data.slice(0, visibleCards)} 
                    onAnimalSelect={handleAnimalSelect}/>
                <aside className={`animalPage__aside ${selectedAnimal ? 'open' : ''}`}>
                    {selectedAnimal && (
                        <div className="animalPage__aside-content">
                            <header>
                                <button className="animalPage__close" 
                                        onClick={handleCloseAside}>
                                        X
                                </button>
                            </header>
                            <section>
                                <ul className="imgContainer">
                                    {selectedAnimal.moreImg.map((img) => (
                                        <li key={selectedAnimal.id}><img src={img} alt={selectedAnimal.name} /></li>
                                    ))}
                                </ul>
                                <h3>{selectedAnimal.name}</h3>
                                <h3>{selectedAnimal.gender}</h3>
                                <h3>{selectedAnimal.age}</h3>
                                <div>
                                    <i> <FaDog  style={{fill: selectedAnimal.animals ? 'green' : 'red'}}/> </i>
                                    <i> <TbVaccine style={{fill: selectedAnimal.vaccine ? 'green' : 'red', stroke: selectedAnimal.vaccine ? 'green' : 'red'}}/> </i>
                                </div>
                                <footer>
                                    <Button text={t('buttons.house')} onClick={isOpen}/>
                                    <Button text={t('buttons.guard')} onClick={isOpen}/>
                                </footer>
                            </section>
                        </div>
                    )}
                </aside>
            </section>

            {visibleCards < data.length && (
                <button className="animalPage__more" onClick={loadMoreAnimals}>
                    {isLoading ? t('buttons.loading') : t(`buttons.${animal}`)}
                </button>
            )}
        </>
    )

}

export default AnimalsPage;