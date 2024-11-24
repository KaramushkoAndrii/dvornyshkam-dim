
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';

import ImgContainer from "../../components/imgContainer/ImgContainer";
// import dogImg from 'images/dog.jpg'

import './animalsPage.scss';

const AnimalsPage = () => {

    const { t } = useTranslation();

    const animalList = [
        { id: 'dogs', imgSrc: '/images/dog.jpg', titleKey: 'lists-title.dogs' },
        { id: 'cats', imgSrc: '/images/dog.jpg', titleKey: 'lists-title.cats' },
    ]

    return (
        <section className="animals__section">
            <div className="animals__header">
                <h2>{t('animals-page.title')}</h2>
                <p>{t('animals-page.description')}</p>
            </div>
            <ul className="animals-content" role="list">

                {animalList.map(animal => (
                    <li key={animal.id} className={`animals-content__${animal.id}`} role="listitem">
                        <Link to={`${animal.id}`}>
                            <img src={animal.imgSrc} alt={animal.id} />
                            <span>{t(`${animal.titleKey}`)}</span>
                        </Link>
                    </li>
                ))}
                {/* <li className="animals-content__dog" role="listitem">
                    <Link to={'dogs'}>
                        <img src="/images/dog.jpg" alt="dog" />
                        <span>{t('lists-title.dogs')}</span>
                    </Link>
                </li>
                <li className="animals-content__cat" role="listitem">
                    <Link to={'cats'}>
                        <img src="/images/dog.jpg" alt="cat" />
                        <span>{t('lists-title.cats')}</span>
                    </Link>
                </li> */}
            </ul>
        </section>
    )
}

export default AnimalsPage;