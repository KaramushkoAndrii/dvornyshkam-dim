
import Animals from '../../data/animalsDB';

import AnimalsList from '../animalsList/AnimalsList';

import './ourAnimals.scss';


const OurAnimals = () => {
    return (
        <section className='animals'>
            <AnimalsList title={'lists-title.dogs'} dataList={Animals} btnText={'buttons.more-dogs'}/>
            <AnimalsList title={'lists-title.cats'} dataList={Animals} btnText={'buttons.more-cats'}/>
        </section>
    )
}

export default OurAnimals;