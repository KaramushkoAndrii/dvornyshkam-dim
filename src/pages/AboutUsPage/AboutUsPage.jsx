

import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { slideFromLeft, slideFromRight } from "../../components/Animations";
import FigureContainer from "../../components/figureContainer/FigureContainer";

import './aboutUsPage.scss';

const AboutUsPage = ({title, dataList}) => {

    const { t } = useTranslation();
    return (
        <section className="aboutUs">
            <h2 {...slideFromLeft} className="page__title">{t(`${title}`)}</h2>
            <ul className="aboutUs__list">
                {dataList.map((item, key) => {

                    const slideText = key % 2 === 0 ? slideFromRight : slideFromLeft;
                    const slideImg = key % 2 === 0 ? slideFromLeft : slideFromRight;

                    return (
                        <li key={key} className="aboutUs__item">
                            <FigureContainer {...slideImg} src={item.img} alt={item.alt} text={item.alt} /> 
                            <motion.p {...slideText}>{t(`about-us-page.${item.text}`)}</motion.p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default AboutUsPage;