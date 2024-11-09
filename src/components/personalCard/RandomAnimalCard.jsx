

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";

import './randomAnimalCard.scss';


const RandomAnimalCard = ({animal}) => {

    const {img, name, gender, age, vaccine, animals} = animal
    return (
        <div className='random-animal'>
            <div className='animal__info'>
                <div className='animal__picture'>
                    <img src={img} alt={name} />
                </div>
                <div className='animal__description'>
                    <h3 className='animal__name'>{name}</h3>
                    <span className='animal__gender'>{gender},</span>
                    <span className='animal__age'>{age}</span>
                </div>
            </div>
            <div className='animal__characteristics'>
                <div className="animal__animals"> <FaDog  style={{fill: animals ? 'green' : 'red'}}/> </div>
                <div className="animal__vaccine"> <TbVaccine style={{fill: vaccine ? 'green' : 'red', stroke: vaccine ? 'green' : 'red'}}/> </div>
            </div>
        </div>
    )
}

export default RandomAnimalCard;