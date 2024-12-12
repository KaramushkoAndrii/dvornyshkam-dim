

import { useTranslation } from "react-i18next";

import FigureContainer from "../../components/figureContainer/FigureContainer";

import './aboutUsPage.scss';

const AboutUsPage = ({title, dataList}) => {

    const { t } = useTranslation();
    return (
        <section className="aboutUs">
            <h2 className="page__title">{t(`${title}`)}</h2>
            <ul className="aboutUs__list">
                {dataList.map((item, key) => (
                    <li key={key} className="aboutUs__item">
                        <FigureContainer src={item.img} alt={item.alt} text={item.alt} /> 
                        <p>{t(`about-us-page.${item.text}`)}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AboutUsPage;