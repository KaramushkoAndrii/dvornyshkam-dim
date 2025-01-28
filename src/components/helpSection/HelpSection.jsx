
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import HelpList from '../../data/helpList';
import Button from '../button/Button';
import { FaPaw } from "react-icons/fa";

import './helpSection.scss';

const HelpSection = ({btnText}) => {

    const { t } = useTranslation();

    return (
        <section className='help'>
            <motion.div
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 2}}
                className='help__content'>
                    <h2>{t('help-section.title')}</h2>
                    <p>{t('help-section.description')}</p>
                    <ul>
                        {HelpList.map((item, key) => (
                            <li key={key}>
                                <FaPaw />
                                <span>{t(`${item}`)}</span>
                            </li>
                        ))}
                    </ul>

                    {btnText ? <Link to={'/help'}><Button text={t(btnText)}/></Link> : null}
                
            </motion.div>
        </section>
    )
}

export default HelpSection;