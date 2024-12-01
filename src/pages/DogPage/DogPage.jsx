
import { useState } from "react";
import { useTranslation } from "react-i18next";

import AllAnimalsList from "../../components/allAnimalsList/AllAnimalsList";
import animalsDB from "../../data/animalsDB";

import './dogPage.scss';

const DogPage = () => {

    const [visibleCards, setVisibleCards] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

    const { t } = useTranslation();

    const loadMoreAnimals = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setVisibleCards((prev) => prev + 4);
        setIsLoading(false);
    }

    return (
        <>
            <section className="dogPage">
                <h2>{t('dog-page.title')}</h2>
                <section className="dogPage__content">
                    <AllAnimalsList list={animalsDB.slice(0, visibleCards)} /> {/* Показываем только часть списка */}
                    <aside className="dogPage__aside">
                        <div className="dogPage__aside-content">

                        </div>
                    </aside>
                </section>

                {visibleCards < animalsDB.length && (
                    <button className="dogPage__more" onClick={loadMoreAnimals}>
                        {isLoading ? t('buttons.loading') : t('buttons.more-dogs')}
                    </button>
                )}
            </section>
        </>
    )
}

export default DogPage;