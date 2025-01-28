
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AboutList from '../../data/aboutList';
import AboutListItem from '../../data/aboutInfoList';
import './aboutSection.scss';

const AboutSection = () => {

    const { t } = useTranslation();

    return (
        <section className='about'>
            <h2 className='about__title'>{t('about.title')}</h2>
            <p className='about__description'>{t('about.description')}</p>

            <div className='about__info'>
                <motion.ul initial={{x: -100, opacity: 0}}
                           whileInView={{x: 0, opacity: 1}}
                           transition={{duration: 1}}
                           viewport={{once: true}}
                           className='about__info-list'>
                    {AboutListItem.map((item, key) => (
                        <li key={key} className='about__info-list--item'>
                            {item.count} 
                            <span>{t(`${item.text}`)}</span>
                        </li>
                    ))}
                </motion.ul>
            </div>

            <ul className='about__list'>
                {AboutList.map((item, key) => (
                    <li key={key} className='about__item'>
                        <h3 className='about__item--title'>{t(`about-list.${item.title}`)}</h3>
                        <p className='about__item--content'>{t(`about-list.${item.content}`)}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AboutSection;