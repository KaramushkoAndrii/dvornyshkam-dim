
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { slideFromRight, slideFromLeft, scale } from '../Animations';
import AboutList from '../../data/aboutList';
import AboutListItem from '../../data/aboutInfoList';
import './aboutSection.scss';

const AboutSection = () => {

    const { t } = useTranslation();

    return (
        <section className='about'>
            <h2 className='about__title'>{t('about.title')}</h2>
            <motion.p className='about__description' {...slideFromLeft}>{t('about.description')}</motion.p>

            <div className='about__info'>
                <motion.ul
                        {...slideFromRight}
                           className='about__info-list'>
                    {AboutListItem.map((item, key) => (
                        <li key={key} className='about__info-list--item'>
                            {item.count} 
                            <span>{t(`${item.text}`)}</span>
                        </li>
                    ))}
                </motion.ul>
            </div>

            <motion.ul className='about__list' {...scale}>
                {AboutList.map((item, key) => (
                    <li key={key} className='about__item'>
                        <h3 className='about__item--title'>{t(`about-list.${item.title}`)}</h3>
                        <p className='about__item--content'>{t(`about-list.${item.content}`)}</p>
                    </li>
                ))}
            </motion.ul>
        </section>
    )
}

export default AboutSection;