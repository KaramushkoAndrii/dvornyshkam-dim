
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";

import AllAnimalsList from "../../components/allAnimalsList/AllAnimalsList";
import animalsDB from "../../data/animalsDB";
import Button from "../../components/button/Button";

import './dogPage.scss';

const DogPage = ({isOpen}) => {

    const [visibleCards, setVisibleCards] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const { t } = useTranslation();

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
            <section className="dogPage">
                <h2>{t('dog-page.title')}</h2>
                <section className="dogPage__content">
                    <AllAnimalsList 
                        list={animalsDB.slice(0, visibleCards)} 
                        onAnimalSelect={handleAnimalSelect}/>
                    <aside className={`dogPage__aside ${selectedAnimal ? 'open' : ''}`}>
                        {selectedAnimal && (
                            <div className="dogPage__aside-content">
                                <header>
                                    <button className="dogPage__close" 
                                            onClick={handleCloseAside}>
                                        X
                                    </button>
                                </header>
                                <section>
                                    <ul className="imgContainer">
                                        {selectedAnimal.moreImg.map((img, key) => (
                                            <li key={key}><img src={img} alt={selectedAnimal.name} /></li>
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

                {visibleCards < animalsDB.length && (
                    <button className="dogPage__more" onClick={loadMoreAnimals}>
                        {isLoading ? t('buttons.loading') : t('buttons.more-dogs')}
                    </button>
                )}
            </section>
        </>
    )
}

export default DogPage;