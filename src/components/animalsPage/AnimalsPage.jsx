
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import AllAnimalsList from '../allAnimalsList/AllAnimalsList';
import Button from '../../components/button/Button';
import SearchFilter from '../searchFilter/SearchFilter';

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import './animalsPage.scss';

const AnimalsPage = ({title, data = [], animal, isOpen}) => { 

    const { t } = useTranslation();

    const [visibleCards, setVisibleCards] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);


    const list = useMemo(() => data.slice(0, visibleCards), [data, visibleCards]);
    // const [filters, setFilters] = useState({
    //     vacine: null,
    //     animals: null,
    //     gender: '',
    //     ageRange: ''
    // })

    // //Функция для преобразования возраста из строки в число
    // const parseAge = (age) => parseInt(age.replace(/\D+/g, ''), 10);

    // const filteredData = data.filter((animal) => {
    //     const vacineMatch = filters.vacine === null || animal.vacine === filters.vacine;
    //     const animalsMatch = filters.animals === null || animal.animals === filters.animals;
    //     const genderMatch = !filters.gender || animal.gender === filters.gender;

    //     const age = parseAge(animal.age);
    //     let ageMatch = true;
    //     switch (filters.ageRange) {
    //         case '0-1':
    //             ageMatch = age <= 1;
    //             break;
            
    //         case '1-3':
    //             ageMatch = age >= 1 && age <= 3;
    //             break;
            
    //         case '3-5':
    //             ageMatch = age >= 3 && age <= 5;
    //             break;
    
    //         case '5-10':
    //             ageMatch = age >= 5 && age <= 10;
    //             break;
    
    //         case '10+':
    //             ageMatch = age > 10;
    //             break;
            
    //         default:
    //             ageMatch = true;
    //     }
    
    //     return vacineMatch && animalsMatch && genderMatch && ageMatch;
    // })



    const loadMoreAnimals = async () => {
        setVisibleCards((prev) => prev + 4);
        console.log('load')
    }

    const handleAnimalSelect = useCallback((animal) => {
        setSelectedAnimal(animal)
        console.log('selected')
    }, [])

    const handleCloseAside = () => {
        setSelectedAnimal(null)
        console.log('close')
    }

    // const handleFilterChange = (newFilters) => {
    //     setFilters(newFilters);
    // }

    // useEffect(() => {

    // }, [data, visibleCards])

    return (
        <>
            <h2>{t(`${title}`)}</h2>

            {/* <SearchFilter onFilterChange={handleFilterChange} /> */}

            <section className="animalPage__content">
                <AllAnimalsList 
                    list={list} 
                    onAnimalSelect={handleAnimalSelect}
                />
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
                                    {selectedAnimal.moreImg.map((img, indx) => (
                                        <li key={indx}><img src={img} alt={selectedAnimal.name} /></li>
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
                    {t(`buttons.${animal}`)}
                </button>
            )}
        </>
    )

}

export default AnimalsPage;