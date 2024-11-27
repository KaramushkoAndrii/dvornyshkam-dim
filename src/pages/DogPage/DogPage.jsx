
import { useTranslation } from "react-i18next";

import AllAnimalsList from "../../components/allAnimalsList/AllAnimalsList";
import animalsDB from "../../data/animalsDB";

import './dogPage.scss';

const DogPage = () => {

const { t } = useTranslation();

    return (
        <>
            <section className="dogPage">
                <h2>{t('dog-page.title')}</h2>
                <section className="dogPage__content">
                    <AllAnimalsList list={animalsDB}/>
                    <aside className="dogPage__aside">
                        <div className="dogPage__aside-content">

                        </div>
                    </aside>
                </section>
            </section>
        </>
    )
}

export default DogPage;