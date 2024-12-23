
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import './animalsPage.scss';

const AnimalsPage = ({animalList}) => {

    const { t } = useTranslation();

    return (
        <section className="animals__section">
            <div className="animals__header">
                <h2>{t('animals-page.title')}</h2>
                <p>{t('animals-page.description')}</p>
            </div>
            <ul className="animals-content">
                {animalList.map(animal => (
                    <li key={animal.id} className={`animals-content__${animal.id}`}>
                        <Link to={`${animal.src}`}>
                            <img src={animal.imgSrc} alt={animal.id} />
                            <span>{t(`${animal.titleKey}`)}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AnimalsPage;