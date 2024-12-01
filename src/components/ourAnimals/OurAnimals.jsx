
import Animals from '../../data/animalsDB';

import AnimalsList from '../animalsList/AnimalsList';

import './ourAnimals.scss';


const OurAnimals = ({isOpen}) => {
    return (
        <section className='animals'>
            <AnimalsList title={'lists-title.dogs'} dataList={Animals} btnText={'buttons.more-dogs'} src={'animals/dogs'} isOpen={isOpen}/>
            <AnimalsList title={'lists-title.cats'} dataList={Animals} btnText={'buttons.more-cats'} isOpen={isOpen}/>
        </section>
    )
}

export default OurAnimals;