

import AnimalCard from "../AnimalCard/AnimalCard";

import './allAnimalsList.scss';

const AllAnimalsList = ({list, onAnimalSelect}) => {
    return (
        <ul className="allAnnimals__list">
            {list.map((item, key) => (
                <li key={key} onClick={() => onAnimalSelect(item)}>
                    <AnimalCard animal={item}/>
                </li>
            ))}
        </ul>
    )
}

export default AllAnimalsList;