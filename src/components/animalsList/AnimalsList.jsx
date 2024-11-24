
import { useTranslation } from 'react-i18next';
import AnimalCard from '../AnimalCard/AnimalCard';
import Button from '../button/Button';


import './animalsList.scss';

const AnimalsList = ({title, dataList, src, btnText, isOpen}) => {

    const { t } = useTranslation();
    return (
        <>
            <h2 className='animals__title'>{t(`${title}`)}</h2>
            <ul className='animals__list'>
                {dataList.slice(0, 3).map((item, key) => (
                    <li key={key} className='animal__list--item'>
                        {<AnimalCard animal={item} isOpen={isOpen}/>}
                    </li>
                ))}
            </ul>
            {dataList.length > 3 && (
                <div className='animals__more-button'>
                    <Button text={t(`${btnText}`)} />
                </div>
            )}
        </>
    )
}

export default AnimalsList;