
import AnimalCard from '../AnimalCard/AnimalCard';
import Animals from '../../data/animalsDB';
import Button from '../button/Button';

import './ourAnimals.scss';


const OurAnimals = () => {
    return (
        <section className='animals'>
            <ul className='animals__list'>
                {Animals.map((item, key) => (
                    <li key={key} className='animal__list--item'>
                        {<AnimalCard animal={item}/>}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default OurAnimals;