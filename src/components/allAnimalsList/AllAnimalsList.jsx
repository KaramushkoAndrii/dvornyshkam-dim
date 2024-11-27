

import AnimalCard from "../AnimalCard/AnimalCard";

import './allAnimalsList.scss';

const AllAnimalsList = ({list}) => {
    return (
        <ul className="allAnnimals__list">
            {list.map((item, key) => (
                <li key={key}>
                    <AnimalCard animal={item}/>
                </li>
            ))}
        </ul>
    )
}

export default AllAnimalsList;